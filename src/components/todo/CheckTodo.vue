<template>
  <v-list v-if="reorderedTasks">
    <v-list-item v-for="(element, index) in reorderedTasks" :key="index">
      <v-list-item-icon>
        <v-icon @click="finishTodo(element)">
          {{element.finish_at !== null ? 'fas fa-check' :
          element.id !== loadingItem ? 'far fa-circle' :
          'fas fa-circle-notch fa-spin'}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content style="flex: 2 1 !important;">
        <v-list-item-title  style="font-size: 1.3rem" v-text="element.name"
                            :class="element.order === 3 ? 'red--text' :
                             element.order === 2 ? 'orange--text' :
                             element.order === 1 ? 'blue--text' :
                             ''">
        </v-list-item-title>
      </v-list-item-content>
      <v-spacer></v-spacer>
      <v-avatar class="card__avatar--left" left v-if="element.schedule">
        <v-icon>fas fa-clock</v-icon>
      </v-avatar>
      <v-menu bottom left min-width="25rem">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon style="font-size: 1.5rem">fas fa-ellipsis-v</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-text style="padding: 1rem; cursor: pointer" v-for="item in todoItem" :key="item.title" @click="todoItemMove(element, item)">
            <v-icon style="margin-right: 1rem">{{item.icon}}</v-icon>
            <span style="font-size: 1rem">{{item.title}}</span>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text style="padding: 10px; background-color: #f5f5f5">
            <v-card-title style="">
              <span style="color: grey;">设置优先级</span>
            </v-card-title>
            <v-card-text>
              <v-btn v-for="(icon, index) in flagItem" :key="index" elevation="0"
                     @click="updateOrder(element, icon.order)">
                <v-icon :class="icon.icon" :color="icon.color" >
                </v-icon>
              </v-btn>
            </v-card-text>
            <v-card-title style="background-color: #f5f5f5">
              <span style="color: grey;">设置截止日期</span>
            </v-card-title>
            <v-card-text style="background-color: #f5f5f5">
              <div v-for="(schedule, index) in scheduleItem" :key="index"
                   style="display: inline-block" @click="addSchedule(element, schedule.schedule)">
                <v-btn elevation="0">
                  <v-icon :class="schedule.icon" :color="schedule.color" block>
                  </v-icon>
                </v-btn>
                <span style="display: block; text-align: center">
                  {{index === 0 ? '明天' :
                  index === 1 ? '周五' :
                  index === 2 ? '周末' :
                  index === 3 ? '自定义' : ''}}
                </span>
              </div>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-menu>
      <v-list-item-icon v-if="element.subTasks">
        <v-icon>fas fa-chevron-down</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
  <div v-else>
    <span style="font-size: 2rem; text-align: center;
     display: block; color: forestgreen; margin-top: 5rem">
          还没有任务呢，添加一个吧?&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-crow"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CheckTodo',
  props: {
    tasks: {
      required: true
    },
    loadingItem: {
      // 完成过程图标旋转
      required: true,
      type: Number
    }
  },
  computed: {
    reorderedTasks: function () {
      let vm = this
      let reorderedTasks = []
      var taskCopy = Object.assign([], vm.tasks) // vm.tasks下不可在有object
      vm.tasks.forEach((task, index) => {
        // 循环tasks
        if (task.sub) {
          // 寻找存在sub的task
          taskCopy.forEach((taskNew, newIndex) => {
            // if (task.sub === 51 && taskNew.id === 51) {
            //   console.log(task, taskNew)
            // }
            // 找到主task
            if (task.sub === taskNew.id) {
              if (!taskCopy[newIndex].subTasks) taskCopy[newIndex].subTasks = []
              taskCopy[newIndex].subTasks.push(vm.tasks[index]) // 赋进去
            }
          })
        }
      })
      taskCopy.forEach((task) => {
        if (!task.sub || task.subTasks) {
          reorderedTasks.push(task)
        }
      })
      return reorderedTasks
    }
  },
  data () {
    return {
      flagItem: [
        { icon: 'fas fa-flag', color: 'red', order: 3 },
        { icon: 'fas fa-flag', color: 'orange', order: 2 },
        { icon: 'fas fa-flag', color: 'blue', order: 1 },
        { icon: 'far fa-flag', color: '', order: 0 }
      ],
      scheduleItem: [
        { icon: 'fas fa-calendar-plus', color: 'green', schedule: 'tomorrow' },
        { icon: 'fas fa-calendar-alt', color: 'blue', schedule: 'nextMon' },
        { icon: 'fas fa-calendar-times', color: 'indigo', schedule: 'cancelSchedule' },
        { icon: 'fas fa-ellipsis-h', color: '', schedule: 'more' }
      ],
      todoItem: [
        { title: '编辑', move: 'edit', icon: 'far fa-edit', important: 3 },
        { title: '添加子任务', move: 'addSub', icon: 'fas fa-plus', important: 2 },
        { title: '复制此项目', move: 'duplicate', icon: 'far fa-copy' },
        { title: '移至其他项目', move: 'moveTo', icon: 'fas fa-external-link-alt' },
        { title: '删除', move: 'delete', icon: 'far fa-trash-alt' }
      ]
    }
  },
  methods: {
    // reOrderTasks (tasks) {
    //   let vm = this
    //   vm.reorderedTasks = tasks
    //   tasks.forEach((task, index) => {
    //     // 循环tasks
    //     if (task.sub) {
    //       // 寻找存在sub的task
    //       tasks.forEach((taskNew, newIndex) => {
    //         // 找到主task
    //         if (task.sub === taskNew.id) {
    //           vm.reorderedTasks[newIndex]['subTasks'] = []
    //           vm.reorderedTasks[newIndex]['subTasks'].push(tasks[index]) // 赋进去
    //           vm.reorderedTasks.splice(index, 1) // 删除旧的
    //         }
    //       })
    //     }
    //   })
    //   console.log(vm.reorderedTasks)
    // },
    finishTodo (element) {
      this.$emit('finish-todo', element)
    },
    todoItemMove (element, item) {
      this.$emit('todo-item-move', element.id, item.move)
    },
    updateOrder (element, order) {
      this.$emit('update-order', element, order)
    }
  }
}
</script>

<style lang="scss" scoped>
  >>> .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 10px !important;
  }

  >>> .v-btn:not(.v-btn--round).v-size--default {
    height: 36px !important;
    min-width: 50px !important;
    padding: 0 15px !important;
  }
</style>

<template>
  <v-list v-if="tasks.length">
    <v-list-item v-for="(element, index) in tasks" :key="index">
      <v-list-item-icon>
          <v-icon @click="finishTodo(element)">
            {{element.finish_at !== null ? 'fas fa-check' :
            element.id !== loadingItem ? 'far fa-circle' :
            'fas fa-circle-notch fa-spin'}}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title  style="font-size: 1.3rem" v-text="element.name"></v-list-item-title>
      </v-list-item-content>

      <v-spacer></v-spacer>
      <v-avatar class="card__avatar--left" left v-if="element.schedule">
        <v-icon>fas fa-clock</v-icon>
      </v-avatar>

      <v-avatar class="card__avatar--left" left v-if="element.common">
        <v-icon color="orange">fas fa-exclamation-circle</v-icon>
      </v-avatar>

      <v-menu bottom left min-width="25rem">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>fas fa-ellipsis-v</v-icon>
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
                     @click="changeImportance(element, icon.important)">
                <v-icon :class="icon.icon" :color="icon.color" >
                </v-icon>
              </v-btn>
            </v-card-text>
            <v-card-title style="background-color: #f5f5f5">
              <span style="color: grey;">设置截止日期</span>
            </v-card-title>
            <v-card-text style="background-color: #f5f5f5">
              <v-btn v-for="(schedule, index) in scheduleItem" :key="index" elevation="0"
                     @click="addSchedule(element, schedule.schedule)">
                <v-icon :class="schedule.icon" :color="schedule.color" block>
                </v-icon>
              </v-btn>
              <v-row style="text-align: center; margin-top: 3px">
                <v-col v-for="n in 4" :key="n" cols="3">
                  {{
                  n === 1 ? '明天' :
                  n === 2 ? '本周五' :
                  n === 3 ? '本周末' :
                  n === 4 ? '自定义' : ''
                  }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-menu>

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
  data () {
    return {
      flagItem: [
        { icon: 'fas fa-flag', color: 'red', important: 3 },
        { icon: 'fas fa-flag', color: 'orange', important: 2 },
        { icon: 'fas fa-flag', color: 'blue', important: 1 },
        { icon: 'far fa-flag', color: '', important: 0 }
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
    finishTodo (element) {
      this.$emit('finish-todo', element.id)
    },
    todoItemMove (element, item) {
      this.$emit('todo-item-move', element.id, item.move)
    }
  }
}
</script>

<style scoped>

</style>

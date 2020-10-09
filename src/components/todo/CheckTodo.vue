<template>
  <v-list v-if="tasks.length">
    <div class="wrapper" ref="wrapper"
         style="overflow: hidden; height: calc(100vh - 112px - 68px - 6px);">
      <div class="content" style="width: 100%">
        <div class="todo-items content" v-for="(element, index) in tasks"
             style="overflow: hidden"
             :key="index" v-if="!element.sub && !element.finish_at">
          <!--      这里写的也太蠢了 有时间封装一下-->
          <v-list-item>
            <v-list-item-icon>
              <v-icon @click="finishTodo(element)" :class="expendId === element.id ? 'blue--text' : ''" style="font-size: 2.5rem">
                {{element.finish_at !== null ? 'fas fa-check' :
                element.id !== loadingItem ? 'far fa-circle' :
                'fas fa-circle-notch fa-spin'}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content style="flex: 10 1 !important;">
              <v-list-item-title  style="font-size: 1.3rem" v-text="element.name"
                                  :class="element.order === 3 ? 'red--text' :
                             element.order === 2 ? 'orange--text' :
                             element.order === 1 ? 'blue--text' :
                             ''" v-if="element.id !== editRow">
              </v-list-item-title>
              <v-text-field
                v-else
                v-model="newTaskName"
                dense
                label="准备做点什么?"
                solo hide-details autofocus
                append-icon="fas fa-cloud"
                @click:append="changeItemName(element)"
                @keydown.enter="changeItemName(element)"
                @keyup.enter="changeItemName(element)">
              </v-text-field>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-menu bottom left min-width="25rem">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon style="font-size: 1.5rem" :class="expendId === element.id ? 'blue--text' : ''">fas fa-ellipsis-v</v-icon>
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
                    <v-btn v-for="(icon, index2) in flagItem" :key="index2" elevation="0"
                           @click="updateOrder(element, icon.order)">
                      <v-icon :class="icon.icon" :color="icon.color" >
                      </v-icon>
                    </v-btn>
                  </v-card-text>
                  <v-card-title style="background-color: #f5f5f5">
                    <span style="color: grey;">设置截止日期</span>
                  </v-card-title>
                  <v-card-text style="background-color: #f5f5f5">
                    <div v-for="(schedule, index3) in scheduleItem" :key="index3"
                         style="display: inline-block" @click="addSchedule(element, schedule.schedule)">
                      <v-btn elevation="0">
                        <v-icon :class="schedule.icon" :color="schedule.color" block>
                        </v-icon>
                      </v-btn>
                      <span style="display: block; text-align: center">
                  {{index3 === 0 ? '明天' :
                  index3 === 1 ? '周五' :
                  index3 === 2 ? '周末' :
                  index3 === 3 ? '自定义' : ''}}
                </span>
                    </div>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-menu>
            <v-list-item-icon v-if="!element.sub" @click="expend(element, index)">
              <v-icon :class="expendId === element.id ? 'blue--text' : ''">{{element.id === expendId ? 'fas fa-chevron-left fa-rotate-270' : 'fas fa-chevron-left'}}</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item style="margin-left: 3rem" class="sub-todo-items" v-if="expendId === element.id" v-for="(element2, indexItem) in expendItems"
                       :key="indexItem">
            <v-list-item-icon>
              <v-icon @click="finishTodo(element2)" style="font-size: 2.5rem">
                {{element2.finish_at !== null ? 'fas fa-check' :
                element2.id !== loadingItem ? 'far fa-circle' :
                'fas fa-circle-notch fa-spin'}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content style="flex: 10 1 !important;">
              <v-list-item-title  style="font-size: 1.3rem" v-text="element2.name"
                                  v-if="editRow !== element2.id"
                                  :class="element2.order === 3 ? 'red--text' :
                             element2.order === 2 ? 'orange--text' :
                             element2.order === 1 ? 'blue--text' :
                             ''">
              </v-list-item-title>
              <v-text-field
                v-else
                v-model="newTaskName"
                dense
                label="准备做点什么?"
                solo hide-details autofocus
                append-icon="fas fa-cloud"
                @click:append="changeItemName(element2)"
                @keydown.enter="changeItemName(element2)"
                @keyup.enter="changeItemName(element2)">
              </v-text-field>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-avatar class="card__avatar--left" left v-if="element2.schedule">
              <v-icon>fas fa-clock</v-icon>
            </v-avatar>
            <v-menu bottom left min-width="25rem">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon style="font-size: 1.5rem">fas fa-ellipsis-v</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-text style="padding: 1rem; cursor: pointer" v-for="item in todoItem" :key="item.title" @click="todoItemMove(element2, item)">
                  <v-icon style="margin-right: 1rem">{{item.icon}}</v-icon>
                  <span style="font-size: 1rem">{{item.title}}</span>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text style="padding: 10px; background-color: #f5f5f5">
                  <v-card-title style="">
                    <span style="color: grey;">设置优先级</span>
                  </v-card-title>
                  <v-card-text>
                    <v-btn v-for="(icon, index2) in flagItem" :key="index2" elevation="0"
                           @click="updateOrder(element2, icon.order)">
                      <v-icon :class="icon.icon" :color="icon.color" >
                      </v-icon>
                    </v-btn>
                  </v-card-text>
                  <v-card-title style="background-color: #f5f5f5">
                    <span style="color: grey;">设置截止日期</span>
                  </v-card-title>
                  <v-card-text style="background-color: #f5f5f5">
                    <div v-for="(schedule, index3) in scheduleItem" :key="index3"
                         style="display: inline-block" @click="addSchedule(element2, schedule.schedule)">
                      <v-btn elevation="0">
                        <v-icon :class="schedule.icon" :color="schedule.color" block>
                        </v-icon>
                      </v-btn>
                      <span style="display: block; text-align: center">
                  {{indexItem === 0 ? '明天' :
                  indexItem === 1 ? '周五' :
                  indexItem === 2 ? '周末' :
                  indexItem === 3 ? '自定义' : ''}}
                </span>
                    </div>
                  </v-card-text>
                </v-card-text>
              </v-card>
            </v-menu>
            <v-list-item-icon v-if="!element2.sub" @click="expend(element2, indexItem)">
              <v-icon>{{element2.id === expendId ? 'fas fa-chevron-left fa-rotate-270' : 'fas fa-chevron-left'}}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </div>
      </div>
    </div>
  </v-list>
  <div v-else>
    <span style="font-size: 2rem; text-align: center;
     display: block; color: forestgreen; margin-top: 5rem">
          还没有任务呢，添加一个吧?&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-crow"></i>
    </span>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

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
  created () {
    let vm = this
    vm.$nextTick(() => {
      vm.scroll = new BScroll(vm.$refs.wrapper, {click: true})
    })
  },
  watch: {
    tasks () {
      let vm = this
      vm.$nextTick(() => {
        if (!vm.scroll) {
          vm.scroll = new BScroll(vm.$refs.wrapper, {click: true})
          vm.scroll.on('touchEnd', (pos) => {
            if (pos.y > 50) {
              vm.loadTabs(vm.nowTabsId)
            }
          })
        } else {
          vm.scroll.refresh()
        }
      })
    }
  },
  computed: {
    expendItems: {
      get: function () {
        let vm = this
        let items = []
        vm.tasks.forEach((task) => {
          if (task.sub === vm.expendId) {
            task.finish_at ? items.push(task) : items.unshift(task)
          }
        })
        return items
      },
      set: function () {

      }
    }
  },
  data () {
    return {
      snackbarText: '',
      snackbar: false,
      newTaskName: '',
      editRow: 0,
      tasksCopy: [],
      expendId: 0,
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
        { title: '编辑', move: 'edit', icon: 'far fa-edit' },
        { title: '添加子任务', move: 'addSub', icon: 'fas fa-plus' },
        { title: '移至其他项目', move: 'moveTo', icon: 'fas fa-external-link-alt' },
        { title: '删除', move: 'delete', icon: 'far fa-trash-alt' }
      ]
    }
  },
  methods: {
    expend (element, index) {
      let vm = this
      if (vm.expendId === element.id) {
        vm.expendId = null
      } else {
        // 展开
        vm.expendId = element.id
      }
    },
    finishTodo (element) {
      this.$emit('finish-todo', element)
    },
    todoItemMove (element, item) {
      let vm = this
      if (item.move === 'addSub') {
        vm.expendId = element.id
      } else if (item.move === 'edit') {
        vm.newTaskName = element.name
        vm.editRow = element.id
      }
      vm.$emit('todo-item-move', element, item.move)
    },
    updateOrder (element, order) {
      this.$emit('update-order', element, order)
    },
    changeItemName (element) {
      let vm = this
      if (element.name !== vm.newTaskName) {
        vm.editRow = 0
        vm.$emit('change-item-name', element, vm.newTaskName)
        element.name = vm.newTaskName
      } else vm.editRow = 0
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

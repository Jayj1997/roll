<template>
  <div class="todo">
    <v-card class="todo__body" elevation="15">
      <v-toolbar color="cyan" class="todo__body--background" dark flat>
        <v-toolbar-title style="font-size: 1.7rem; font-weight: 600">{{todoTitle}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="deleteTab" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>fas fa-trash-alt</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2 error--text">
              确定要删除该标签吗?
            </v-card-title>

            <v-card-text style="margin-top: 15px; font-size: 1.3rem">
              删除标签是不可恢复的操作, 会一并删除该标签下的任务, 您的统计系统会减去被删除的任务重新计算.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text style="font-size: 1.4rem" @click="deleteTab = false">取消</v-btn>
              <v-btn color="primary" text @click="deleteThisTab()"
                     class="error--text" style="font-size: 1.4rem">
                确定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="addTab" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
              :bin="attrs" v-on="on">
              <v-icon>fas fa-plus-circle</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title style="margin-bottom: 15px">
              <span class="headline">添加标签页</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="标签名*" required v-model="tabName"  :rules="nameRules"
                                    validate-on-blur :counter="10"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="设置优先级" hint="1-10, 默认为1" v-model="tabPriority" required :rules="priorityRules" validate-on-blur></v-text-field>
                    </v-col>
                    <v-col cols="12" style="margin-top: 15px">
                      <v-autocomplete
                        :items=tabLabels
                        label="分类(统计用)"
                        v-model="tabLabel"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
              <span style="color: red; font-size: 1.1rem">带*为必填项</span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text style="font-size: 1.4rem" @click="addTab = false">取消</v-btn>
              <v-btn color="success darken-1" style="font-size: 1.4rem" text @click="addTodoTab()">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            center-active
            show-arrows
            next-icon="fas fa-arrow-right"
            prev-icon="fas fa-arrow-left"
            align-with-title
            slider-color="yellow">
            <v-tab
              v-for="(thisTab, index) in tabs" :key="index"
              style="font-size: 1.3rem; font-weight: 600">
              {{ thisTab.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items v-model="tab" touchless>
        <v-tab-item v-for="(tabChoosed, index) in tabs" :key="index">
          <v-row no-gutters>
            <v-col cols="12" sm="7" md="8" class="todo__primary" style="height: calc(100vh - 112px - 6px);">
              <input-task @add-new-todo="addTodo" @close_sub="subItem = {}" :todo_id="tabChoosed.id" :sub_item="subItem"></input-task>
<!--              <nested-todo class="nested-todo" :tasks="tab.items" v-if="editing"></nested-todo>-->
              <check-todo @finish-todo="finishTodo"
                          @update-order="updateOrder"
                          @todo-item-move="todoItemMove"
                          @change-item-name="changeItemName"
                          class="check-todo content"
                          :loadingItem="loadingItem" :tasks="tabChoosed.items"></check-todo>
            </v-col>
            <v-col cols="12" sm="5" md="4" class="todo__secondary">
              <todo-sparkline :items="tabChoosed.items"></todo-sparkline>
              <progress-circular :items="tabChoosed.items"></progress-circular>
<!--              <todo-history :items="tabChoosed.items"></todo-history>-->
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-dialog v-model="loadingTab" hide-overlay persistent width="300">
      <v-card color="primary">
        <v-card-text style="padding-top: 10px">
          {{loadingText}}
          <v-progress-linear indeterminate color="white" class="mb-0">
          </v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" timeout="2000">
      <span class="text-h5">{{ snackbarText }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false"
               class="text-h5">关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import constant from '@/con/constant'
import todo from '@/methods/api/todo'
import draggable from 'vuedraggable'
import NestedTodo from '@/components/todo/NestedTodo'
import InputTask from '@/components/todo/InputTask'
import CheckTodo from '@/components/todo/CheckTodo'
import TodoSparkline from '@/components/todo/TodoSparkline'
import ProgressCircular from '@/components/todo/ProgressCircular'
// import TodoHistory from '@/components/todo/TodoHistory'
export default {
  name: 'Todo',
  inject: ['reload'],
  components: {
    ProgressCircular,
    draggable,
    NestedTodo,
    InputTask,
    CheckTodo,
    TodoSparkline
    // TodoHistory
  },
  data () {
    return {
      subItem: {},
      drag: false,
      valid: false,
      todoTitle: '任务',
      loadingText: '请稍等...',
      tab: null, // 选中页面的index
      addTab: false, // 添加页面
      deleteTab: false, // 删除页面
      loadingTab: false, // 加载页面
      moveToTab: false, // 移至其他页面
      snackbar: false,
      snackbarText: '',
      tabName: '',
      tabPriority: 1,
      tabLabel: '',
      tabLabels: ['', '工作', '计划', '兴趣', '健身', '其它'],
      moveTabLabels: [],
      moveTabId: null,
      nameRules: [
        v => !!v || '',
        v => v.length < 9 || ''
      ],
      priorityRules: [
        v => v > 0 || '',
        v => v < 11 || ''
      ],
      tabs: [],
      editing: false,
      loadingItem: 0
    }
  },
  mounted () {
    // 左滑弹出tab 阻止页面后退
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  },
  created () {
    let vm = this
    vm.loadTabs(vm.nowTabsId)
  },
  methods: {
    loadTabs (id) {
      let vm = this
      // todo 每次都需要重载整个tab 有待优化
      let data = { tab_id: id }
      todo.todos.index(data).then((rsp) => {
        if (id !== null) {
          // 只更新操作的tab
          vm.tabs.forEach((tab, index) => {
            if (tab.id === id) Object.assign(vm.tabs[index], rsp.data.items[0])
          })
        } else {
          vm.tabs = rsp.data.items
        }
      }).catch(() => {
        vm.tabs = [
          {id: 1, name: '默认', priority: 0}
        ]
        vm.snackbarText = '加载失败, 网络异常'
        vm.snackbar = true
      })
    },
    changeItemName (element, newName) {
      let vm = this
      if (newName === '' || newName === undefined) {
        vm.snackbarText = '不可以修改为空哦'
        vm.snackbar = true
      } else {
        let data = {
          name: newName
        }
        todo.todoItems.changeItemName(element.id, data).then(() => {
          vm.snackbarText = '修改成功'
          vm.snackbar = true
        }).catch(() => {
          vm.snackbarText = '网络异常, 修改失败'
          vm.snackbar = true
        })
      }
    },
    updateOrder (element, order) {
      let vm = this
      let data = {
        order: order
      }
      todo.todoItems.updateOrder(element.id, data).then((rsp) => {
        vm.snackbarText = rsp.data.msg
        vm.snackbar = true
      }).catch(() => {
        // todo 有e的情况下如果没有网络会导致提示是空
        vm.snackbarText = '好像网络不太好哦'
        vm.snackbar = true
      }).finally(() => {
        vm.loadTabs(vm.nowTabsId)
      })
    },
    todoItemMove (item, move) {
      let vm = this
      if (move === 'delete') {
        // 删除Item
        todo.todoItems.deleteItem(item.id).then((rsp) => {
          vm.snackbarText = rsp.data.msg
          vm.snackbar = true
        }).catch((e) => {
          vm.snackbarText = e.data.error
          vm.snackbar = true
        }).finally(() => {
          vm.loadTabs(vm.nowTabsId)
        })
      } else if (move === 'addSub') {
        vm.subItem = item
      } else if (move === 'moveTo') {
        vm.moveTabId = item.id
        vm.tabs.forEach((tab) => {
          if (tab.id !== item.todo_id) vm.moveTabLabels.push(tab)
        })
        vm.moveToTab = true
      }
    },
    addTodo (data) { // 添加todoItem
      let vm = this
      todo.todoItems.store(data).then(
        (rsp) => {
          vm.snackbarText = rsp.data.msg
          vm.snackbar = true
        }
      ).catch((e) => {
        vm.snackbarText = e.response.data.error
        vm.snackbar = true
      }).finally(() => {
        vm.loadTabs(vm.nowTabsId)
      })
    },
    addSub (item) {
      this.subItem = item
    },
    finishTodo (item) { // 完成todoItem
      let vm = this
      vm.loadingItem = item.id
      todo.todoItems.update(item.id).then((rsp) => {
        vm.snackbarText = rsp.data.msg
        vm.snackbar = true
      }).catch((e) => {
        vm.snackbarText = e.response.data.error
        vm.snackbar = true
      }).finally(() => {
        vm.loadTabs(vm.nowTabsId)
        vm.loadingItem = 0
      })
    },
    addTodoTab () {
      let vm = this
      if (vm.validate()) {
        vm.loadingTab = true
        var data = {
          'name': vm.tabName,
          'priority': vm.tabPriority,
          'label': vm.tabLabel
        }
        todo.todos.store(data).then((rsp) => {
          vm.snackbarText = rsp.data.msg
          vm.snackbar = true
          vm.addTab = false
        }).catch((e) => {
          vm.snackbarText = e.response.data.error
          vm.snackbar = true
        }).finally(() => {
          vm.loadingTab = false
          vm.tabName = ''
          vm.tabPriority = 1
          vm.tabLabel = ''
          vm.loadTabs(null)
        })
      }
    },
    validate () {
      return this.$refs.form.validate()
    },
    isPhone () {
      return constant.isPhone
    },
    deleteThisTab () {
      let vm = this
      vm.loadingTab = true
      todo.todos.deleteTodo(vm.tabs[vm.tab].id)
        .then((rsp) => {
          if (rsp.data.msg) {
            vm.snackbarText = rsp.data.msg
            vm.snackbar = true
            vm.tabs.splice(vm.tab, 1)
            vm.deleteTab = false
          } else {
            vm.snackbarText = rsp.data.error
            vm.snackbar = true
          }
        }).finally(() => {
          vm.loadingTab = false
        })
    },
    moveTo () {
      let vm = this
      let data = {
        toTabId: vm.tabLabel
      }
      console.log(vm.tabLabel, vm.moveTabId, vm.moveToTab)
      vm.moveToTab = []
      vm.tabLabel = ''
      todo.todoItems.moveTo(vm.moveTabId, data).then((rsp) => {
        vm.snackbarText = rsp.data.msg
        vm.snackbar = true
        vm.moveToTab = false
        vm.loadTabs(null)
      }).catch((e) => {
        vm.snackbarText = e.response.data.error
        vm.snackbar = true
      })
    }
  },
  computed: {
    bg () {
      // todo 增加主题功能 对所有的页面加载背景图片
      return require('@/assets/images/navigator/background-mountain.jpg')
    },
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    },
    nowTabsId () {
      let vm = this
      var index = null
      if (vm.tab !== null) {
        index = vm.tabs.length ? vm.tabs[vm.tab].id : null
      } else index = null
      return index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  >>> .v-text-field__details{overflow: visible;}
  >>> .v-counter { margin-right: 2rem !important; }

  .todo {

    &__body {
      margin: 3px;
      height: calc(100vh - 6px);

      &--background {
        background: #333333;  /* fallback for old browsers */
        background: linear-gradient(to right, #dd1818, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
    }
  }
</style>

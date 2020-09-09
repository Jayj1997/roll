<template>
  <div class="todo">
    <v-card class="todo__body"
      elevation="15">
      <v-toolbar color="cyan" :src="bg" dark flat>
<!--        <v-app-bar-nav-icon v-if="isPhone()">-->
<!--          <v-avatar-->
<!--            class="avatar__behind"-->
<!--            height="40" width="40"-->
<!--            @click="openDrawer()">-->
<!--            <img src="~@/assets/images/navigator/icon-cat.png" alt="avatar">-->
<!--          </v-avatar>-->
<!--        </v-app-bar-nav-icon>-->

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

            <v-card-text style="margin-top: 15px">
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
              <small>带*为必填项</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text style="font-size: 1.4rem" @click="addTab = false">取消</v-btn>
              <v-btn color="success darken-1" style="font-size: 1.4rem" text @click="addTodo()">保存</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <template v-slot:extension>
          <v-tabs
            v-model="currentTab"
            center-active
            fixed-tabs
            show-arrows
            next-icon="fas fa-arrow-right"
            prev-icon="fas fa-arrow-left"
            align-with-title
            slider-color="yellow">
            <v-tab
              v-for="tab in tabs" :key="tab.id" :href="'#tab-'+tab.name"
              style="font-size: 1.3rem; font-weight: 600">
              {{ tab.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items v-model="currentTab" touchless>
        <v-tab-item
          v-for="tab in tabs" :key="tab.id"
          :value="'tab-'+ tab.name">
          <v-row no-gutters>
            <v-col cols="12" sm="9" class="todo__primary" style="height: calc(100vh - 112px - 6px);">
              <nested-todo class="nested-todo" :tasks="list"></nested-todo>
            </v-col>
            <v-col cols="12" sm="3" class="todo__secondary" style="background-color: blue">1</v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-dialog
      v-model="loadingTab"
      hide-overlay
      persistent
      width="300">
      <v-card
        color="primary"
      >
        <v-card-text style="padding-top: 10px">
          {{loadingText}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
    >
      <span class="text-h5">{{ snackbarText }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
          class="text-h5">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import constant from '@/con/constant'
import todo from '@/methods/todo'
import draggable from 'vuedraggable'
import NestedTodo from '@/components/todo/NestedTodo'

export default {
  name: 'Todo',
  components: {
    draggable,
    NestedTodo
  },
  data () {
    return {
      list: [
        {id: 1, name: '写完todo', order: 1, priority: 1, timer: '2020-09-13 08:00', comment: '说着玩玩,写不完', sub: []},
        {id: 2, name: '完成添加todo', order: 2, timer: '2020-09-05 08:00', sub: []},
        {id: 3, name: '编辑按钮', order: 3, sub: []},
        {id: 4, name: '完成sub task', order: 4, priority: 2, sub: [{id: 5, name: '完成timeline', order: 5, priority: 3, sub: []}]}
      ],
      currentTab: '',
      drag: false,
      valid: false,
      todoTitle: '任务',
      loadingText: '请稍等...',
      tab: null, // 选中页面的index
      addTab: false, // 添加页面
      deleteTab: false, // 删除页面
      loadingTab: false, // 加载页面,
      snackbar: false,
      snackbarText: '',
      tabName: '',
      tabPriority: 1,
      tabLabel: '',
      tabLabels: ['', '工作', '计划', '兴趣', '健身', '其它'],
      nameRules: [
        v => !!v || '',
        v => v.length < 9 || ''
      ],
      priorityRules: [
        v => v > 0 || '',
        v => v < 11 || ''
      ],
      tabs: []
    }
  },
  mounted () {
    let vm = this

    // 滑动作移tab 阻止页面后退
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })

    todo.todos.index().then(
      (rsp) => {
        if (rsp.data.items) {
          vm.tabs = rsp.data.items
        }
      }
    ).catch(() => {
      vm.tabs = [
        {id: 1, name: '默认', priority: 0},
        {id: 2, name: '默认2', priority: 1}
      ]
      vm.snackbarText = '加载失败, 网络异常'
      vm.snackbar = true
    }).finally(() => {
      vm.currentTab = 'tab-' + vm.tabs[1].name
    })
  },
  methods: {
    test () {
      console.log(this.currentTab)
    },
    addTodo () {
      let vm = this
      if (vm.validate()) {
        vm.loadingTab = true
        var data = {
          'name': vm.tabName,
          'priority': vm.tabPriority,
          'label': vm.tabLabel
        }
        todo.todos.store(data).then(
          (rsp) => {
            if (rsp.data.error) {
              vm.snackbarText = rsp.data.error
              vm.snackbar = true
            } else {
              vm.snackbarText = rsp.data.msg
              vm.snackbar = true
              vm.tabs.push({
                id: rsp.data.id,
                name: vm.tabName,
                priority: vm.tabPriority,
                label: vm.label
              })
              vm.addTab = false
            }
          }
        ).finally(() => {
          vm.loadingTab = false
          vm.tabName = ''
          vm.tabPriority = 1
          vm.tabLabel = ''
        })
      }
    },
    validate () {
      return this.$refs.form.validate()
    },
    isPhone () {
      return constant.isPhone
    },
    // openDrawer () {
    //   // todo 调起drawer
    // },
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

      // // vm.tabs.splice(vm.tab, 1)
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
    }
  }
</style>

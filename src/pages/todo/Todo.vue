<template>
  <div class="todo">
    <v-card class="todo__body"
      elevation="15">
      <v-toolbar color="cyan" :src="bg" dark flat>
        <v-app-bar-nav-icon v-if="isPhone()">
          <v-avatar
            class="avatar__behind"
            height="40" width="40"
            @click="openDrawer()">
            <img src="~@/assets/images/navigator/icon-cat.png" alt="avatar">
          </v-avatar>
        </v-app-bar-nav-icon>

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
              <v-btn
                color="primary"
                text
                @click="deleteThisTab()"
                class="error--text"
                style="font-size: 1.4rem"
              >
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
                        :items="['', '工作', '计划', '兴趣', '健身', '其它']"
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
              <v-btn color="success darken-1" style="font-size: 1.4rem" text @click="addNewTab()">保存</v-btn>
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
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="tab in tabs" :key="tab.id" style="font-size: 1.3rem; font-weight: 600">
              {{ tab.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="tab in tabs" :key="tab.id">
          <v-row no-gutters>
            <v-col cols="12" sm="8" class="todo__primary" style="height: calc(100vh - 112px - 6px);">
              <test style="margin-top: 1rem"></test>
            </v-col>
            <v-col cols="12" sm="4" class="todo__secondary" style="background-color: blue">1</v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-dialog
      v-model="loadingTab"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
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
  </div>
</template>

<script>
import constant from '@/con/constant'
import todo from '@/methods/todo'
import draggable from 'vuedraggable'
import Test from '../Test'

export default {
  name: 'Todo',
  components: {
    draggable,
    Test
  },
  data () {
    return {
      drag: false,
      valid: false,
      todoTitle: '任务',
      loadingText: '请稍等...',
      tab: null, // 选中页面的index
      addTab: false, // 添加页面
      deleteTab: false, // 删除页面
      loadingTab: false, // 加载页面,
      tabName: '',
      nameRules: [
        v => !!v || '',
        v => v.length < 9 || ''
      ],
      priorityRules: [
        v => v > 0 || '',
        v => v < 11 || ''
      ],
      tabPriority: 1,
      tabLabel: '',
      tabs: [
        {id: 1, name: '工作', label: '', priority: 1},
        {id: 2, name: 'Roll&Dice', label: '', priority: 2},
        {id: 3, name: '健身', label: '', priority: 10}
      ],
      items: [
        {id: 1, name: 'jdsiajdsaij'},
        {id: 2, name: 'sdadsads'}
      ]
    }
  },
  mounted () {
    // 滑动作移tab 阻止页面后退
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL)
    })
  },
  methods: {
    test () {
      todo.todos().then((resp) => {
        console.log(resp)
      })
    },
    validate () {
      return this.$refs.form.validate()
    },
    isPhone () {
      return constant.isPhone
    },
    openDrawer () {
      // todo 调起drawer
    },
    addNewTab () {
      let vm = this
      if (vm.validate()) {
        vm.loadingTab = true
        setTimeout(() => {
          vm.tabs.push({ name: vm.tabName, priority: vm.tabPriority, label: vm.tabLabel })
          vm.loadingTab = false
          vm.addTab = false
          vm.tabName = ''
          vm.tabPriority = 1
          vm.tabLabel = ''
        }, 3000)
      }
    },
    deleteThisTab () {
      let vm = this
      vm.loadingTab = true
      setTimeout(() => {
        vm.loadingTab = false
        vm.tabs.splice(vm.tab, 1)
        vm.deleteTab = false
      }, 3000)
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

  .todo {

    &__body {
      margin: 3px;
      height: calc(100vh - 6px);
    }
  }
</style>

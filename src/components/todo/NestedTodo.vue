<template>
  <draggable :list="tasks ? tasks : []" class="list-group dragArea"
             @change="changed"
             handle=".handle" v-bind="dragOptions">
    <div v-for="(element, index) in tasks" :key="index">
      <v-card class="todo-list" elevation="5">
        <v-card-title class="text-h5 todo-list__title"
                      :class="element.important === 3 ? 'red--text':
                        element.important === 2 ? 'orange--text':
                        element.important === 1 ? 'blue--text' : ''">
          <v-btn icon class="handle">
            <v-icon style="font-size: 1.5rem">fas fa-arrows-alt</v-icon>
          </v-btn>
          <span v-if="editing !== element.id" style="font-size: 1.3rem">{{element.name}}</span>
          <v-text-field autofocus single-line v-else v-model="element.name" />
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
              <v-card-text style="padding: 1rem; cursor: pointer" v-for="item in todoItem" :key="item.title">
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

<!--          <v-chip class="card__chips" :close="editing === element.id"-->
<!--                  @click:close="deleteChips(element, 'timer')"-->
<!--                  close-icon="fas fa-times"-->
<!--                  color="orange" text-color="white"-->
<!--                  v-if="element.timer">-->

<!--            <span :style="editing !== element.id ? 'margin-right: 7px' : ''">-->
<!--              {{element.timer}}</span>-->
<!--          </v-chip>-->
<!--          <v-chip class="card__chips" :close="editing === element.id"-->
<!--                  @click:close="deleteChips(element, 'comment')"-->
<!--                  close-icon="fas fa-times"-->
<!--                  color="green" text-color="white"-->
<!--                  v-if="element.comment">-->

<!--            <span v-if="editing !== element.id" :style="editing !== element.id ? 'margin-right: 7px' : ''">-->
<!--            {{element.comment}}-->
<!--            </span>-->
<!--            <v-text-field single-line hide-details v-else v-model="element.comment">-->
<!--            </v-text-field>-->
<!--          </v-chip>-->
        </v-card-title>
      </v-card>
      <nested-todo class="nested-drag" @change="changed" :tasks="element.sub"></nested-todo>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'NestedTodo',
  components: {
    draggable
  },
  props: {
    tasks: {
      required: true
    }
  },
  data () {
    return {
      dragging: false,
      editing: 0,
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
    addSchedule (element, schedule) {

    },
    edit (element) {
      let vm = this
      vm.editing = element.id
    },
    changeImportance (element, important) {
      if (element.important !== important) {
        element.important = important
        // todo sql操作
      }
    },
    deleteChips (element, val) {
      element[val] = false
      // todo api删除相应
    },
    changed (data) {
      console.log(data)
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'drag-animation',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/assets/scss/main';

  /*.v-list-item__title { margin: 0 .5rem; font-size: 1.3rem }*/

  .todo-list {

    &:not(:last-child) {
      margin-bottom: .5rem;
    }

    &__title {
      padding: 1rem;
      @include respond(tab-port) {
        padding: .5rem;
      }
      @include respond(phone) {
        padding: 0;
      }
    }

    &__text {
      padding-left: 1rem;
    }
  }

  .card {
    &__avatar {
      &--left {
        max-height: 36px !important;
      }
    }
  }

  .nested-drag {
    margin-left: 3rem;
    @include respond(tab-port) {
      margin-left: 2.5rem;
    }
    @include respond(phone) {
      margin-left: 2rem;
    }
  }
</style>

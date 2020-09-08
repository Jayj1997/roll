<template>
  <draggable :list="tasks" class="list-group dragArea"
             handle=".handle" v-bind="dragOptions">
    <div v-for="element in tasks" :key="element.order">
      <v-card class="todo-list" elevation="5">
        <v-card-title class="text-h5 todo-list__title"
                      :class="element.priority === 1 ? 'red--text':
                        element.priority === 2 ? 'orange--text':
                        element.priority === 3 ? 'blue--text' : ''">
          <v-btn icon class="handle">
            <v-icon style="font-size: 1.5rem">fas fa-arrows-alt</v-icon>
          </v-btn>
          <span v-if="editing !== element.id">{{element.name}}</span>
          <v-text-field autofocus single-line v-else v-model="element.name" />
          <v-spacer></v-spacer>

          <v-avatar class="card__avatar--left" left>
            <v-icon>fas fa-clock</v-icon>
          </v-avatar>

          <v-avatar class="card__avatar--left" left>
            <v-icon>fas fa-exclamation-circle</v-icon>
          </v-avatar>

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

<!--          <v-btn icon @click="edit(element)">-->
<!--            <v-icon>fas fa-pencil-alt</v-icon>-->
<!--          </v-btn>-->

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>fas fa-ellipsis-v</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in todoItem"
                :key="i"
                @click=""
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-card-title>
<!--        <v-card-text v-if="editing">-->
<!--          -->
<!--        </v-card-text>-->
      </v-card>
      <nested-todo class="nested-drag" :tasks="element.sub"></nested-todo>
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

// todo 移动端移动bug

export default {
  name: 'NestedTodo',
  components: {
    draggable
  },
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      dragging: false,
      editing: 0,
      todoItem: [
        { title: '编辑', move: 'edit' },
        { title: '添加子任务', move: 'addSub' },
        { title: '移至其他项目', move: 'moveTo' }
      ]
    }
  },
  methods: {
    add () {
      this.list.push({name: 'new', order: 999})
    },
    edit (element) {
      let vm = this
      vm.editing = element.id
    },
    deleteChips (element, val) {
      element[val] = false
      // todo api删除相应
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'drap-animation',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/assets/scss/main';

  .v-list-item__title { margin: 0 .5rem; font-size: 1.3rem }

  .todo-list {
    &:not(:last-child) {
      margin-bottom: .5rem;
    }

    &__title {
      padding: 1rem;
      @include respond(tab-port) {
        padding: .5rem;
      }
    }

    &__text {
      padding-left: 1rem;
    }
  }

  .nested-drag {
    margin-left: 4rem;
    @include respond(tab-port) {
      margin-left: 3rem;
    }
    @include respond(phone) {
      margin-left: 2rem;
    }
  }
</style>

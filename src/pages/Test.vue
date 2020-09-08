<template>
  <div class="todo">
    <v-row no-gutters>
      <v-col cols="12" sm="8">
        <draggable :list="list" class="list-group"
                   handle=".handle" v-bind="dragOptions">
          <transition-group type="transition" :name="!dragging ? 'flip-list' : null">
            <v-card class="todo-list" elevation="5" v-for="element in list" :key="element.order">
              <v-card-title class="text-h5 todo-list__title"
                            :class="element.priority === 1 ? 'red--text':
                                element.priority === 2 ? 'yellow--text':
                                element.priority === 3 ? 'blue--text' : ''">
                <v-btn icon class="handle" @click="test()">
                  <v-icon style="font-size: 1.5rem">fas fa-arrows-alt</v-icon>
                </v-btn>
                <span v-if="editing !== element.id">{{element.name}}</span>
                <v-text-field autofocus single-line v-else v-model="element.name" />
                <v-spacer></v-spacer>
                <v-btn icon @click="edit(element)">
                  <v-icon>fas fa-pencil-alt</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="todo-list__text">
                <v-chip class="card__chips" :close="editing === element.id"
                        @click:close="deleteChips(element, 'timer')"
                        close-icon="fas fa-times"
                        color="orange" text-color="white"
                        v-if="element.timer">
                  <v-avatar class="card__avatar--left" left>
                    <v-icon>fas fa-clock</v-icon>
                  </v-avatar>
                  <span :style="editing !== element.id ? 'margin-right: 7px' : ''">{{element.timer}}</span>
                </v-chip>
                <v-chip class="card__chips" :close="editing === element.id"
                        @click:close="deleteChips(element, 'comment')"
                        close-icon="fas fa-times"
                        color="green" text-color="white"
                        v-if="element.comment">
                  <v-avatar class="card__avatar--left" left>
                    <v-icon>fas fa-exclamation-circle</v-icon>
                  </v-avatar>
                  <span v-if="editing !== element.id" :style="editing !== element.id ? 'margin-right: 7px' : ''">
                    {{element.comment}}
                  </span>
                  <v-text-field single-line hide-details v-else v-model="element.comment">
                  </v-text-field>
                </v-chip>
              </v-card-text>
            </v-card>
          </transition-group>
        </draggable>
      </v-col>
      <v-col cols="4">
        <button @click="add()">add</button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Test',
  components: {
    draggable
  },
  data () {
    return {
      list: [
        {id: 1, name: '写完todo', order: 1, priority: 1, timer: '2020-09-13 08:00', comment: '说着玩玩,写不完', sub: []},
        {id: 2, name: '完成添加todo', order: 2, timer: '2020-09-05 08:00', sub: []},
        {id: 3, name: '编辑按钮', order: 3, sub: []},
        {id: 4, name: '完成sub task', order: 4, priority: 2, sub: []},
        {id: 5, name: '完成timeline', order: 5, priority: 3, sub: []}
      ],
      dragging: false,
      editing: 0,
      tasks: []
    }
  },
  methods: {
    test () {
      console.log(this.list)
    },
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
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/assets/scss/main';

  >>> .v-chip .v-chip__close.v-icon.v-icon--right {
    margin-right: 10px !important;
  }

  .todo {
    margin-left: 1rem;
    @include respond(phone) {
      margin-left: 0;
    }
    &-list {

      &:not(:last-child) {
        margin-bottom: 5px;
      }

      &__title {
        padding: 1rem;
        @include respond(phone) {
          padding: 0;
        }
      }

      &__text {
        padding-left: 1rem;
      }
    }
  }

  .card__chips {
    margin-bottom: .5rem !important;
  }
  .card__avatar--left {
    margin-left: .5rem !important;
  }

  .button {
    margin-top: 35px;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group {
    min-height: 20px;
  }
</style>

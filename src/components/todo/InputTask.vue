<template>
  <v-text-field
    style="margin: 1rem"
    v-model="newTask"
    label="准备做点什么?"
    solo hide-details autofocus
    :append-icon="newTask ? 'fas fa-cloud' : ''"
    @click:append="addTodo"
    @keydown.enter="addTodo"
    @keyup.enter="addTodo">
    <template v-slot:prepend-inner v-if="sub_item.id">
      <div class="sub-label">
        <span class="sub-label__text">{{sub_item.name}}</span>
        <v-icon class="sub-label__icon" @click="closeSub">fas fa-times</v-icon>
      </div>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'InputTask',
  data () {
    return {
      newTask: '',
      subName: '123'
    }
  },
  props: {
    todo_id: {
      required: true,
      type: Number
    },
    sub_item: {
      required: true,
      type: Object
    }
  },
  methods: {
    closeSub () {
      this.$emit('close_sub')
    },
    addTodo () {
      let vm = this
      if (vm.newTask) {
        vm.$emit('add-new-todo', {data: { todo_id: vm.todo_id, name: vm.newTask, sub: vm.sub_item ? vm.sub_item.id : 0 }})
        vm.newTask = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sub-label {
    background-color: #6dd6ff;
    border-radius: 1rem;
    padding: .5rem;

    &__text {
      color: white;
      padding: .5rem;
    }

    &__icon {
      margin: 0 .5rem;
      font-size: 2rem;
      color: #393535;
    }
  }
</style>

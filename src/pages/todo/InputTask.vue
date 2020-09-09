<template>
  <v-text-field
    style="margin: 1rem"
    v-model="newTask"
    label="准备做点什么?"
    solo hide-details
    :append-icon="newTask ? 'fas fa-cloud' : ''"
    @click:append="addTodo"
    @keydown.enter="addTodo"
    @keyup.enter="addTodo"
  >
  </v-text-field>
</template>

<script>
export default {
  name: 'InputTask',
  data () {
    return {
      newTask: ''
    }
  },
  props: {
    todo_id: {
      required: true,
      type: Number
    }
  },
  methods: {
    addTodo () {
      let vm = this
      if (vm.newTask) {
        vm.$emit('add-new-todo', {data: { todo_id: vm.todo_id, name: vm.newTask }})
        vm.newTask = ''
      }
    }
  }
}
</script>

<style scoped>

</style>

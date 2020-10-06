<template>
  <todo-sparkline></todo-sparkline>
</template>
<script>
import TodoSparkline from '../components/todo/TodoSparkline'
export default {
  name: 'test',
  components: {
    TodoSparkline
  },
  data () {
    return {
      admins: [
        ['添加用户信息'],
        ['管理用户信息']
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete']
      ],
      val: {a: 1, b: 2, c: 3}
    }
  },
  methods: {
    // test () {
    //   let vm = this
    //   // Object.assign(this.val, {d: 4})
    //   vm.$set(vm.val, 'd', 4)
    //   console.log(this.val)
    // }
  }
}
</script>

<style>
</style>

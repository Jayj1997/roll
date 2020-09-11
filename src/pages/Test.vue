<template>
  <div>
    <nested-todo :tasks="list"></nested-todo>
  </div>
</template>
<script>
import NestedTodo from '../components/todo/NestedTodo'
export default {
  name: 'test',
  components: {
    NestedTodo
  },
  data () {
    return {
      list: [
        {id: 1, name: '工作', order: 1, important: 1, schedule: '2020-09-13 08:00', common: '说着玩玩,写不完', sub: []},
        {id: 2, name: '写完某项目', order: 2, schedule: '2020-09-05 08:00', sub: []},
        {id: 3, name: '完成ppt', order: 3, sub: []},
        {id: 4, name: '搭建环境', order: 4, important: 2, sub: [{id: 5, name: '接入https', order: 5, important: 3, sub: []}]}
      ]
    }
  },
  methods: {
  }
}
</script>

<style></style>

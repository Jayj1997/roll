<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-group :value="true">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              fas fa-check
            </v-icon>
          </v-btn>
<!--          <v-list-item-icon>-->
<!--            <v-icon>fas fa-circle</v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>-->
<!--              党建模块-->
<!--            </v-list-item-title>-->
<!--          </v-list-item-content>-->
        </template>
        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>用户</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>
<!--            <v-list-item-icon>-->
<!--              <v-icon v-text="icon"></v-icon>-->
<!--            </v-list-item-icon>-->
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
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

<template>
  <div class="todo">
    <v-card class="todo__body"
      elevation="15">
      <v-toolbar
        color="cyan"
        :src="bg"
        dark
        flat
      >
        <v-app-bar-nav-icon v-if="isPhone()">
          <v-avatar
            class="avatar__behind"
            height="40" width="40"
            @click="openDrawer()">
            <img src="~@/assets/images/navigator/icon-cat.png" alt="avatar">
          </v-avatar>
        </v-app-bar-nav-icon>

        <v-toolbar-title style="font-size: 1.7rem; font-weight: 600">{{tabTitle}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>fas fa-trash-alt</v-icon>
        </v-btn>

        <v-btn icon @click="test()">
          <v-icon>fas fa-plus-circle</v-icon>
        </v-btn>

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
              v-for="tab in tabs" :key="tab" style="font-size: 1.3rem; font-weight: 600">
              {{ tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.id"
        >
          <v-row no-gutters>
            <v-col cols="12" sm="8" class="todo__primary" style="height: calc(100vh - 112px - 6px); background-color: orangered">1</v-col>
            <v-col cols="12" sm="4" class="todo__secondary" style="background-color: blue">1</v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import constant from '@/con/constant'
import todo from '@/methods/todo'

export default {
  name: 'Todo',
  data () {
    return {
      tabTitle: '任务',
      tab: null,
      tabs: [
        '工作', 'Roll&Dice'
      ]
    }
  },
  methods: {
    test () {
      todo.todos().then((resp) => {
        console.log(resp)
      })
    },
    showItem (item) {
      this.tabTitle = item.title
    },
    isPhone () {
      return constant.isPhone
    },
    openDrawer () {
    }
  },
  computed: {
    bg () {
      return require('@/assets/images/navigator/background-mountain.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  .todo {

    &__body {
      margin: 3px;
      height: calc(100vh - 6px);
    }
  }
</style>

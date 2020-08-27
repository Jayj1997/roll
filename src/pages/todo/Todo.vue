<template>
  <div class="todo">
    <v-card class="todo__body"
      elevation="15">
      <v-toolbar
        color="cyan"
        dark
        flat
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>任务</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <button>fuck u</button>
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      tab: null,
      items: [
        'web', 'shopping', 'videos', 'images', 'news'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ' +
        'elit, sed do eiusmod tempor incididunt ut labore et do' +
        'lore magna aliqua. Ut enim ad minim veniam, quis nostr' +
        'ud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat.'
    }
  },
  methods: {
    test () {
      setTimeout(() => {
        return 1
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  .todo {

    &__body {
      margin: 10px;
      height: calc(100vh - 20px);
    }
  }
</style>

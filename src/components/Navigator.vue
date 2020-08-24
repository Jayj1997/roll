<template>
  <v-container>
    <v-avatar
      class="avatar__behind"
      height="40" width="40"
      @click="drawer ? drawer = false : drawer = true">
      <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="icon">
    </v-avatar>
    <v-navigation-drawer
      height="100vh"
      v-model="drawer"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :permanent="permanent"
      width="230"
      :color="color"
      :src="bg"
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar height="40" width="40">
            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="icon">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jay</v-list-item-title>
            <v-list-item-subtitle>Work harder</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon :style="item.name === 'schedule' ? 'font-size: 25px':
                            item.name === 'todo' ? 'font-size: 27px' :
                            item.name === 'key' ? 'font-size: 23px' :
                            item.name === 'setting' ? 'font-size: 26px' :
                            'font-size: 24px'" style="color: white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-4">
          <v-btn block>登出</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'Navigator',
  data () {
    return {
      drawer: false,
      items: [
        { name: 'schedule', title: '日程', icon: 'fas fa-calendar-alt' },
        { name: 'todo', title: '任务', icon: 'fas fa-clipboard-list' },
        { name: 'key', title: '密码', icon: 'fas fa-key' },
        { name: 'setting', title: '资料', icon: 'fas fa-user' }
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal'
      ],
      background: true
    }
  },
  computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    },
    permanent () {
      return document.body.clientWidth >= 600 // todo 宽度更替更新
    },
    expandOnHover () {
      return document.body.clientWidth >= 600 &&
        document.body.clientWidth <= 960// todo 宽度更替更新
    },
    miniVariant () {
      return document.body.clientWidth >= 600 &&
        document.body.clientWidth <= 960// todo 宽度更替更新
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';
  >>> .v-list--nav .v-list-item { padding: 0 8px 0 15px }
  >>> .v-list-item__subtitle, .v-list-item__title { overflow: visible }
  >>> .v-list--dense .v-list-item, .v-list-item__title {
    font-size: 1.4rem !important;
    font-weight: 600 !important;
    color: white
  }

  .v-list-item__avatar { margin-left: 6px !important;}
  .v-list-item__subtitle {margin-top: 10px !important;}

  .avatar__behind {
    position: absolute;
    left: 10px;
    top: 10px;
  }
</style>

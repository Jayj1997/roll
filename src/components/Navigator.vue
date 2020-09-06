<template>
<!--    <v-avatar-->
<!--      class="avatar__behind"-->
<!--      height="40" width="40"-->
<!--      @click="drawer ? drawer = false : drawer = true">-->
<!--      <img src="~@/assets/images/navigator/icon-cat.png" alt="avatar">-->
<!--    </v-avatar>-->
    <v-navigation-drawer
      height="100vh"
      v-model="drawer"
      :expand-on-hover="threeInOne"
      :mini-variant="threeInOne"
      :permanent="threeInOne"
      width="230"
      :color="color"
      :src="bg"
      style="position: fixed; z-index: 5000"
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line :class="threeInOne && 'px-0'">
          <v-list-item-avatar height="40" width="40">
            <img src="~@/assets/images/navigator/icon-cat.png" alt="avatar">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title :style="{color: fontColor}">Jay</v-list-item-title>
            <v-list-item-subtitle :style="{color: fontColor + '!important'}">Work harder</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link @click="goTo(item.name)"
        >
          <v-list-item-icon>
            <v-icon :style="(item.name === 'Schedule' ? 'font-size: 25px;':
                            item.name === 'Todo' ? 'font-size: 27px;' :
                            item.name === 'Key' ? 'font-size: 23px;' :
                            item.name === 'Profile' ? 'font-size: 26px;' :
                            'font-size: 24px;') + 'color:' + fontColor ">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content :style="{color: fontColor + '!important'}">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-4">
          <v-btn @click="logout" block color="info"><v-icon style="margin-right: 10px">fas fa-hippo</v-icon>登出</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
</template>

<script>
import user from '@/methods/user'
import {store} from '@/store'

export default {
  name: 'Navigator',
  data () {
    return {
      drawer: false,
      items: [
        { name: 'Schedule', title: '日程', icon: 'fas fa-calendar-alt' },
        { name: 'Todo', title: '任务', icon: 'fas fa-clipboard-list' },
        { name: 'Note', title: '笔记', icon: 'fas fa-book' },
        { name: 'Key', title: '密码', icon: 'fas fa-key' },
        { name: 'Profile', title: '资料', icon: 'fas fa-user' },
        { name: 'Test', title: '测试页面', icon: '' }
      ],
      color: 'primary',
      fontColor: 'black',
      background: true,
      threeInOne: document.body.clientWidth >= 600 // todo 判断document.element
    }
  },
  computed: {
    bg () {
      return this.background ? require('@/assets/images/navigator/background-mountain.jpg') : undefined
    }
    // permanent () {
    //   return document.body.clientWidth >= 600
    // },
    // expandOnHover () {
    //   return document.body.clientWidth >= 600
    // },
    // miniVariant () {
    //   return document.body.clientWidth >= 600
    // }
  },
  mounted () {
    window.onresize = () => {
      // todo 已知bug 在600范围附近的屏幕激活drawer会变化宽度 导致无限开合
      if (document.body) {
        this.threeInOne = document.body.clientWidth >= 600
      } else if (document.documentElement.clientWidth) {
        this.threeInOne = document.documentElement.clientWidth >= 600
      } else {
        console.log('navigator.onresize error : 取得屏幕宽度错误')
      }
    }
  },
  methods: {
    logout () {
      user.logout()
      store.commit('CLEAR_TOKEN')
      store.commit('CLEAR_REFRESH_TOKEN')
      store.commit('CLEAR_USER')
      this.$router.push({ name: 'Login' })
    },
    goTo (name) {
      let vm = this
      if (this.$router.currentRoute.name !== name) {
        this.$router.push({ name: name })
      } else {
        vm.drawer = false
      }
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
  }

  .v-list-item__avatar { margin-left: 6px !important;}
  .v-list-item__subtitle {
    margin-top: 10px !important;
    font-size: 1.2rem !important;
    color: rgba(255, 255, 255, .5) !important;}

  .avatar__behind {
    position: absolute;
    left: 10px;
    top: 10px;
  }
</style>

<template>
  <v-app id="app">
    <router-view v-if="isRouterAlive" />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },

  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/scss/main';
</style>

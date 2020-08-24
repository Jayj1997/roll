<template>
  <v-app id="app">
    <navigator></navigator>
    <router-view />
  </v-app>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'App',
  components: {
    Navigator
  },
  mounted () {
    // console.warn('unforeseeable life may like you\'re rolling a dice')
    // console.warn('but everything you fight makes everything worth')
  },
  methods: {
    // selectItem (tag) {
    //   this.$router.push({ name: tag })
    // }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/scss/main';
  .app {
    position: relative;
  }
</style>

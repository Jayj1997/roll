<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
</style>

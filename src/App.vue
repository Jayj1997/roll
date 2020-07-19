<template>
  <div id="app">
    <tab-header></tab-header>
    <router-view/>
    <tab-bar @select-item="selectItem"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar'
import TabHeader from './components/Header'

export default {
  name: 'App',
  components: {
    TabBar,
    TabHeader
  },
  mounted () {
    console.warn('unforeseeable life may like you\'re rolling a dice')
    console.warn('but everything you fight makes everything worth')
  },
  methods: {
    selectItem (tag) {
      this.$router.push({ name: tag })
    }
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/global_layout.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>

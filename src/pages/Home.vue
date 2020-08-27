<template>
  <div class="home">
    <navigator></navigator>
    <router-view class="home__content"></router-view>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import Background from '@/components/Background'
export default {
  name: 'Home',
  components: {
    Navigator,
    Background
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  .home {
    position: relative;
    height: 100vh;
    width: 100%;

    &__content {
      margin-left: 56px;
    }
  }
</style>

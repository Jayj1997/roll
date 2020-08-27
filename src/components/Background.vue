<template>
  <div class="background">
<!--    <div style="background-image: url('~@/assets/images/background/vintage-concrete.png')"></div>-->
  </div>
</template>

<script>
export default {
  name: 'Background',
  data () {
    return {

    }
  },
  computed: {
    bg () {
      return require('@/assets/images/background/vintage-concrete.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

    &__content {
      height: 100%;
      width: 100%;
      object-fit: fill; // fits more than background-size: cover
    }
  }
</style>

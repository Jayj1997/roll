<template>
  <div class="test">
    <header class="header">
      <div class="header__logo-box">
        <img :src="HeaderLogoSource" alt="Logo" class="header__logo">
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" class="btn btn--white btn--animated">Discover Out tours</a>
      </div>
    </header>

    <main>
      <section class="section-about">
        <h2 class="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </section>
    </main>
<!--
    <section class="grid-test">
      <div class="row-test">
        <div class="col-1-of-2">
          Col 1 of 2
        </div>
        <div class="col-1-of-2">
          col 1 of 2
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-1-of-3">
          col 1 of 3
        </div>
        <div class="col-1-of-3">
        col 1 of 3
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-3">
          Col 1 of 3
        </div>
        <div class="col-2-of-3">
          col 2 of 3
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-1-of-4">
          col 1 of 4
        </div>
        <div class="col-2-of-4">
          col 2 of 4
        </div>
      </div>

      <div class="row-test">
        <div class="col-1-of-4">
          Col 1 of 4
        </div>
        <div class="col-3-of-4">
          col 3 of 4
        </div>
      </div>
    </section>
-->
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      HeaderLogoSource: require('../../assets/images/test/logo-white.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/main';

  .test {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #777;
    padding: 3rem;
    box-sizing: border-box;
    /*margin-bottom: 45px;*/
  }

  .header {
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8)),
    url(../../assets/images/test/hero.jpg);
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

    &__logo-box {
      position: absolute;
      top: 4rem;
      left: 4rem;
    }

    &__logo {
      height: 3.5rem;
    }

    &__text-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%); /* 让text-box绝对居中 */
      text-align: center;
    }
  }

  .heading-primary {
    color: $color-white;
    text-transform: uppercase;
    backface-visibility: hidden;  /* 解决动画抖动 */
    margin-bottom: 6rem;

    &--main {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 3.5rem;
      /*animation-name: moveInLeft;*/
      /*animation-duration: 1s;*/
      /*animation-timing-function: ease-in;*/
      animation: moveInLeft 1s ease-out;

      /*animation-iteration-count: 3;  执行几次*/
      /*animation-delay: 3s;*/
    }

    &--sub {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1.75rem;
      animation: moveInRight 1s ease-out;
    }
  }
</style>

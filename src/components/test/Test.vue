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
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div class="row-test">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">
              Your're going to fall in love with nature
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectrtur adipisicing elit, Ratione
              iure, commodi in slt neque perspiciatis laudantinum omnis nemo doloribus nesciunt
              ad earum debitis aspernatur recusandae est uno dolore!
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p class="paragraph">
              this is blank text that i dont know what to say but i have to full fill
              this shit text and i tired to think about it and i dont have that blank
              text generator okay?
            </p>

            <a href="#" class="btn-text">Learn more &rarr;</a>
          </div>
          <div class="col-1-of-2">
            <div class="composition">
              <img src="../../assets/images/test/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
              <img src="../../assets/images/test/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
              <img src="../../assets/images/test/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
            </div>
          </div>
        </div>
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
    font-size: $default-font-size;
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
</style>

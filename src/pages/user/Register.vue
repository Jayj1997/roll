<template>
  <div class="register">
    <div class="header">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="~@/assets/images/register/bg-video-test.mp4" type="video/mp4">
          你的浏览器不支持播放视频，请更新您的浏览器
        </video>
      </div>
      <div class="header__main">
        <div class="header__title">
          <span class="header-1">Dice</span>
        </div>
        <v-card class="header__desc" elevation="9" shaped>
          <v-card-text class="header__desc--card">{{desc.desc1}}</v-card-text>
        </v-card>
      </div>
    </div>

    <main class="main">
      <div class="main__container">
        <div class="main__card" v-for="card in cards" :key="card.id">
          <img :src="card.image">
          <div class="main__card-content">
            <div class="main__card-title">
              <h2>{{card.title}}</h2>
            </div>
            <div class="main__card-desc">
              <span>{{card.text}}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desc: {
        desc1: '总是忘记自己要做什么，又厌烦了在纸上列出条条框框，想要一个强大的TODO应用来时刻记录自己将要做的事情、学习计划或者是财富增长？' +
          '又是否厌烦了那些好似来自上个世纪的老旧样式感觉自己生活在改革解放初期的过时应用？ 加入我们，为您提供人性化的图形界面、丰富的记录功' +
          '能和紧随潮流的页面样式。 ——Dice'
      },
      cards: [
        {id: 1, title: '计划', image: require('@/assets/images/register/musicArt.jpg'), text: '还没想好'},
        {id: 2, title: '运动', image: require('@/assets/images/register/gym2.jpg'), text: '还没想好'},
        {id: 3, title: '财富', image: require('@/assets/images/register/wealth.jpg'), text: '还没想好'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/main';

  .header {
    width: 100%;
    height: 100vh;
    position: relative;

    &__main {
      @include absolute-center;
      backface-visibility: hidden;
    }

    &__title {
      display: block;
      padding-bottom: 12rem;
      animation: moveInLeft 1s ease-out;
      span {
        /* todo 把字体改成渐变色吧？*/
        font-size: 8rem;
        letter-spacing: 1.5rem;
        color: $color-black;
        font-weight: 500;
      }
    }

    &__desc {
      display: block;
      background-image: linear-gradient(to right,
        #d9a7c7, #fffcdc);
      animation: moveInBottom 1s ease-out;

      &--card {
        font-size: 1.5rem;
        font-weight: 700;
        padding: 2rem 3rem;
        line-height: 2rem;
        color: rgba($color-black, 1) !important;
      }
    }
  }

  .main {
    height: 100vh;
    width: 100%;
    padding: 5%;
    background-image: linear-gradient(to right bottom,
      #654ea3, #eaafc8);

    &__container {
      justify-content: center;
      margin: 0 auto;
    }

    &__card {
      display: inline-block;
      background-color: $color-white;
      border-radius: 15px;
      width: 40rem;
      height: 75vh;
      margin: 0 1.5%;

      img {
        display: block;
        width: 100%;
        height: 75%;
        border-radius: 15px;
      }
    }
  }
</style>

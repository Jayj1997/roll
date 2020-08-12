<template>
  <div class="register">
    <div class="header">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="~@/assets/images/register/bg-video-test.mp4" type="video/mp4">
          你的浏览器不支持播放视频，请更新您的浏览器
        </video>
      </div>
      <div class="header-1">
        <span class="header-1--main">Dice</span>
      </div>
      <v-card class="header__desc" elevation="9" shaped>
        <v-card-text class="header__desc--center">总是忘记自己要做什么又厌烦了在纸上列出条条框框，想要一个强大的TODO应用来时刻记录自己将要做的事情、学习计划或者是财富增长？
          又是否厌烦了那些好似来自上个世纪的老旧样式感觉自己生活在改革解放初期的过时应用？ 加入我们，为您提供人性化的图形界面、丰富的
          记录功能和紧随潮流的页面样式。 ——Dice</v-card-text>
      </v-card>
<!--      <div class="header__desc u-shadow-x-y-light">-->
<!--        <span class="header__desc&#45;&#45;center">-->
<!--          总是忘记自己要做什么又厌烦了在纸上列出条条框框，想要一个强大的TODO应用来时刻记录自己将要做的事情、学习计划或者是财富增长？-->
<!--        又是否厌烦了那些好似来自上个世纪的老旧样式感觉自己生活在改革解放初期的过时应用？ 加入我们，为您提供人性化的图形界面、丰富的-->
<!--        记录功能和紧随潮流的页面样式。 ——Dice-->
<!--        </span>-->
<!--      </div>-->
    </div>

    <main class="main">111</main>

    <footer class="main"></footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/main';

  .header {
    width: 100%;
    height: 100vh;
    position: relative;

    &__desc {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 30%;
      width: 50%;
      background-color: $color-white;
      font-size: 2rem;
      border-radius: 5px;

      &--center {
        margin: 3rem 2rem;
        letter-spacing: 1rem;
        text-indent: 2rem;
        color: $color-black;
      }
    }
  }

  .header-1 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--img {
      width: 6rem;
    }
  }
</style>

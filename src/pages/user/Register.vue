<template>
  <div class="register">
    <div class="header">
      <div class="bg-video" style="padding-bottom: 40vh">
        <video class="bg-video__content" autoplay muted loop>
          <source src="~@/assets/images/register/bg-video-test-2.mp4" type="video/mp4">
          你的浏览器不支持播放视频，请更新您的浏览器
        </video>
      </div>
      <div class="header__content">
        <div class="header__border">
          <div class="header__content--title">
            <span class="header-1">Stayingregular</span>
          </div>
          <div class="header__content--border"></div>
          <div class="header__content--slogan">一个功能强大的Todo应用</div>
        </div>
      </div>
      <div class="header__blur"></div>
    </div>
    <div class="sign-in">
      <input type="checkbox" class="sign-in__checkbox" id="sign-in__checkbox">
      <label for="sign-in__checkbox" class="sign-in__button">
        <span class="sign-in__icon">加入我们</span>
      </label>
      <div class="sign-in__background">&nbsp;</div>
      <div class="sign-in__content">
        1
      </div>
    </div>
    <div class="body">
      <div class="body__content">
        <div class="body__content--title">欢迎来到Dice</div>
        <div class="body__content--border"></div>
        <div class="body__content--desc u-no-shake">{{desc.desc1}}</div>
      </div>
      <div class="body__footer">
        <div class="body__footer--border"></div>
        <span>已经加入我们了？<a href="#" style="text-decoration: none; color: white">点击登录 &rarr;</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desc: {
        desc1: '总是忘记自己要做什么，又厌烦了在纸上列出条条框框，想要一个强大的TODO应用来时刻记录自己将要做的事情、学习计划或者是财富增长？' +
          '又是否厌烦了那些来自上个世纪的老旧页面？ 加入我们，为您提供人性化的图形界面、丰富的记录功能和紧随潮流的页面样式。 ——Dice'
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

  .register {
    position: relative;
  }

  .header {
    width: 100%;
    height: 60vh;
    background-color: $color-tertiary;

    &__border {
      border-top: 1px solid rgba($color-primary, .3);
      border-left: 1px solid rgba($color-primary, .3);
      border-right: 1px solid rgba($color-primary, .3);
      border-radius: 3px;
    }

    &__content {
      height: 50vh;
      padding: 10%;
      text-align: center;
      animation: moveInBottom 1s ease-out;

      &--title {
        display: block;
        padding-top: 20vh;
        span {
          font-size: 4rem;
          color: $color-primary;
        }
      }

      &--border {
        margin: 1vh 7%;
        padding: .3vh;
        border-top: 1px dashed rgba($color-primary, .3);
        border-bottom: 1px solid rgba($color-primary, .3);
      }

      &--slogan {
        font-size: 1.2rem;
        color: rgba($color-primary, .6);
        padding-bottom: 25vh;
      }
    }

    &__blur {
      height: 10vh;
      background-image: linear-gradient(to bottom, rgba($color-secondary, 0), rgba($color-secondary, 1));
    }
  }

  .body {
    width: 100%;
    height: 40vh;
    background-color: $color-secondary;
    position: relative;
    color: $color-primary;

    &__content {
      height: 30vh;
      padding: 15% 10%;
      opacity: 0;
      animation: moveInBottom 1s ease-out .5s forwards;

      &--title {
        font-size: 1.5rem;
      }

      &--border {
        height: 1vh;
        margin: 1vh 0;
        border-top: 1px solid rgba($color-primary, .3);
        border-bottom: 1px dashed rgba($color-primary, .3);
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      padding-top: 3px;
      text-align: center;
      opacity: 0;
      animation: slowIn 1s ease-out .5s forwards;

      &--border {
        height: 1px;
        border-top: 1px solid rgba($color-primary, .3);
        width: 80vw;
        padding-bottom: 3px;
      }

      span {
        color: rgba($color-primary, .6);

        a {
          color: $color-primary;
        }
      }
    }
  }

  .sign-in {
    &__checkbox {
      display: none;
    }

    &__checkbox:checked + &__button &__icon {
      background-color: transparent; // 选中之后button和icon继承父背景颜色 = 消失
      color: transparent;
    }

    &__background {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      position: fixed;
      top: 55vh;
      right: 10%;
      background-color: #552411;
      /*<!--background-image: radial-gradient($color-primary-light, $color-primary-dark);-->*/
      z-index: 1000;
      opacity: 0;
      transition: transform 1s ease-out; // 点击到出现的变化速度 ease-inout etc. 的实际操作
    }

    &__content {
      height: 100vh;
      width: 0;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1500;
      opacity: 0;
      transition: all .8s ease;
    }

    &__checkbox:checked ~ &__background {
      transform: scale(20);
      opacity: 1;
    }

    &__checkbox:checked ~ &__content {
      opacity: 1;
      width: 100%;
    }

    &__button {
      animation: moveInBottom 1s ease-out;
      position: absolute;
      top: 55vh;
      right: 10%;
      height: 70px;
      width: 70px;
      background-color: #552411;
      z-index: 2000;
      border-radius: 1000px;
    }

    &__icon {
      transition: all .2s;
      position: absolute;
      @include absolute-center;
      width: 48px;
      color: $color-primary;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
</style>

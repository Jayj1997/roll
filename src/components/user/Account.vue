<template>
  <div>
    <div class="top">
      <div class="top__title">
        <span>Dice</span>
      </div>
      <div class="top__form">
        <slot name="form">text-fields</slot>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__buttons col-5 col-sm-3 col-md-2"
           style="color: white">
        <slot name="buttons">buttons</slot>
      </div>
      <div class="bottom__footer">
        <slot name="footer">
          Build by <a href="https://github.com/Jayj1997" class="sign-in__body--link">Jay</a> for his online todo app Roll&Dice&copy;,
          Copyright by Jay.
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  .top {
    height: 70vh;
    background-color: $color-primary;
    position: relative;

    &__title {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);

      span {
        font-size: 6rem;
        letter-spacing: 1rem;
      }
    }

    &__form {
      position: absolute;
      width: 80%;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .bottom {
    height: 30vh;
    background-color: $color-secondary;
    position: relative;

    &__buttons {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__footer {
      text-align: center;
      word-break: break-all;
      color: $color-quartus;
      position: absolute;
      width: 90%;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, -50%);
      padding-top: 5px;
      border-top: 1px solid $color-quartus;
    }
  }
</style>

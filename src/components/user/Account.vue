<template>
  <div>
    <div class="top">
      <div class="top__title">
        <span>Dice</span>
      </div>
      <div class="top__form">
        <v-form  ref="form" v-model="valid" :lazy-validation="lazy">
          <slot name="text-fields">text-fields</slot>
        </v-form>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__buttons" style="color: white">
        <slot name="buttons">buttons</slot>
      </div>
      <div class="bottom__footer">
        Build by <a href="https://github.com/Jayj1997" class="sign-in__body--link">Jay</a> for his online todo app Roll&Dice&copy;,
        Copyright by Jay.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      valid: true,
      lazy: false
    }
  }
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
      width: 60%;
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

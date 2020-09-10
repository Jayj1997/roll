<template>
  <div class="register">
    <div class="header">
      <div class="bg-video" style="padding-bottom: 30vh">
        <video class="bg-video__content" autoplay muted loop>
          <source src="~@/assets/images/register/bg-video.mp4" type="video/mp4">
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
    <div class="body">
      <div class="body__content">
        <div class="body__content--title">欢迎来到Dice</div>
        <div class="body__content--border"></div>
        <div class="body__content--desc u-no-shake">{{desc.desc1}}</div>
      </div>
      <div class="body__footer">
        <div class="body__footer--border"></div>
        <span>已经加入我们了？<a @click="toLogin"
                         style="text-decoration: none; color: white">
          点击登录 &rarr;</a></span>
      </div>
    </div>
    <div class="sign-in">
      <input type="checkbox" class="sign-in__checkbox" id="sign-in__checkbox">
      <label for="sign-in__checkbox" class="sign-in__button">
        <span class="sign-in__icon">加入我们</span>
      </label>
      <div class="sign-in__background">&nbsp;</div>
      <div class="sign-in__content">
        <div class="sign-in__header">
          <div class="sign-in__header--title">
            <span>Dice</span>
          </div>
          <div class="sign-in__header--form">
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field v-model="name" background-color="white" :counter="10"
                            class="col-10 col-sm-6 col-md-4"
                            style="margin: 0 auto;"
                            :rules="nameRules" label="昵称" filled shaped clearable :loading="loadingName"
                            clear-icon="fas fa-times" @focus="loadingName = !loadingName"
                            validate-on-blur
                            required></v-text-field>
              <v-text-field v-model="email" background-color="white" :counter="30"
                            class="col-10 col-sm-6 col-md-4"
                            style="margin: 0 auto;"
                            :rules="emailRules" label="邮箱" filled shaped clearable :loading="loadingEmail"
                            clear-icon="fas fa-times" @focus="loadingEmail = !loadingEmail"
                            @blur="errorEmail = false"
                            :error-messages="errorEmail? '邮箱已经被注册了': ''"
                            validate-on-blur
                            required></v-text-field>
              <v-text-field v-model="password" background-color="white"
                            :append-icon="showP ? 'far fa-eye fa-xs' : 'far fa-eye-slash fa-xs'"
                            :type="showP ? 'text' : 'password'"
                            hint="最少八个字符数字/密码/."
                            class="input-group--focused col-10 col-sm-6 col-md-4"
                            @click:append="showP = !showP"
                            :rules="passwordRules" label="密码" filled shaped
                            :loading="loadingPassword" @focus="loadingPassword = !loadingPassword"
                            style="font-size: 1.6rem; margin: 0 auto;" validate-on-blur
                            required></v-text-field>
            </v-form>
          </div>
        </div>
        <div class="sign-in__body">
          <div class="sign-in__body--buttons">
<!--            <div class="sign-in__body&#45;&#45;checkboxes col-10 col-sm-6 col-md-4" style="margin: 0 auto;">-->
<!--              <v-select-->
<!--                v-model="informDefault"-->
<!--                background-color="white"-->
<!--                class="text-body-1"-->
<!--                :items="informWay"-->
<!--                item-text="state"-->
<!--                item-value="value"-->
<!--                label="请选一种提醒规律"-->
<!--                append-icon="far fa-surprise"-->
<!--                solo></v-select>-->
<!--            </div>-->
<!--            todo 等有了通知再打开-->
            <v-btn
              :loading="loadingButton"
              :disabled="loadingButton"
              class="primary sign-in__body--commit col-6 col-sm-3 col-md-2"
              style="margin: 0 auto;"
              @click="commit"
            >注册<v-icon right dark>fas fa-cloud</v-icon></v-btn>
          </div>
          <div class="sign-in__body--footer">
            Build by <a href="https://github.com/Jayj1997" class="sign-in__body--link">Jay</a> for his online todo app Roll&Dice&copy;,
            Copyright by Jay.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from '@/methods/user'

export default {
  data () {
    return {
      loadingButton: false,
      loadingName: true,
      loadingEmail: true,
      loadingPassword: true,
      errorEmail: false,
      informDefault: {state: '弱提醒——每日6点发送计划', value: 1},
      informWay: [
        {state: '完全不提醒——计划完全靠自律', value: 0},
        {state: '弱提醒——每日6点发送计划', value: 1},
        {state: '强提醒——我么的自律:o', value: 2}
      ],
      showP: false, // 默认不显示密码
      name: '',
      nameRules: [
        v => !!v || '如何称呼你呢',
        v => (v && v.length <= 10) || '名字太长了'
      ],
      email: '',
      emailRules: [
        v => !!v || '邮箱不能为空',
        v => /.+@.+\..+/.test(v) || '邮箱格式错误'
      ],
      password: '',
      passwordRules: [
        v => !!v || '要填密码',
        v => !!/[a-zA-Z0-9.]/.test(v) || '密码仅限于数字/字母/.组合',
        v => v.length >= 8 || '最少八个字符'
      ],
      valid: true,
      lazy: false,
      desc: {
        desc1: '总是忘记自己要做什么，又厌烦了在纸上列出条条框框，想要一个强大的TODO应用来时刻记录自己将要做的事情、学习计划？' +
          '又是否厌烦了那些来自上个世纪的老旧页面？ 加入我们，为您提供人性化的图形界面、丰富的记录功能和紧随潮流的页面样式。 ——Dice'
      }
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ name: 'Login' })
    },
    validate () {
      return this.$refs.form.validate()
    },
    commit () {
      let vm = this
      if (vm.validate()) {
        let params = {name: vm.name,
          email: vm.email,
          password: vm.password,
          inform: vm.informDefault.value}
        vm.loadingButton = true
        user.register(params).then(() => {
          vm.$router.push({name: 'Login'})
        }
        ).catch(() => {
          vm.errorEmail = true
        }
        ).finally(() => {
          vm.loadingButton = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  >>> .v-text-field__details{overflow: visible;}

  >>> .v-label {overflow: visible;}

  >>> .v-icon.v-icon {font-size: 1.5rem}

  >>> .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {}

  .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #1976d2 !important;
  }

  .theme--light.v-btn.v-btn--disabled {
    color: $color-primary !important;
  }

  .v-counter {
    color: $color-primary !important;
  }

  .register {
    position: relative;
    z-index: 1;
  }

  .header {
    width: 100%;
    height: 70vh;
    background-color: $color-tertiary;

    &__border {
      border-top: 1px solid rgba($color-primary, .3);
      border-left: 1px solid rgba($color-primary, .3);
      border-right: 1px solid rgba($color-primary, .3);
      border-radius: 3px;
    }

    &__content {
      height: 60vh;
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
    height: 30vh;
    background-color: $color-secondary;
    position: relative;
    color: $color-primary;

    &__content {
      position: absolute;
      bottom: 40%;
      @include respond(tab-port) {
        bottom: 30%;
      }
      @include respond(phone) {
        bottom: 20%;
      }
      left: 10%;
      right: 10%;
      text-align: center;
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
        border-top: 1px solid $color-quartus;
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

    &__button {
      animation: moveInBottom 1s ease-out;
      position: absolute;
      top: 55vh;
      right: 10%;
      height: 70px;
      width: 70px;
      background-color: $color-red;
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

    &__header {
      height: 70vh;
      width: 100%;
      background-color: $color-primary;
      position: relative;

      &--title {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);

        span {
          font-size: 6rem;
          letter-spacing: 1rem;
        }
      }

      &--form {
        position: absolute;
        top: 60%;
        left: 50%;
        width: 70%;
        transform: translate(-50%, -50%);
      }
    }

    &__body {
      height: 30vh;
      width: 100%;
      background-color: $color-secondary;
      position: relative;
      text-align: center;
      &--footer {
        word-break: break-all;
        color: $color-quartus;
        width: 90%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 5px 0;
        border-top: 1px solid $color-quartus;
        font-size: 1.3rem;
        line-height: 1rem;
        a {
          font-size: 1.5rem;
        }
      }

      &--buttons {
        padding: 3rem 0;
        margin: 0 auto;
        width: 70%;
        height: 25vh;
      }

      &--commit {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); // 为什么不居中？
        width: 35%;
      }

      &--link {
        text-decoration: none;
        font-size: 1.2rem;
        color: $color-primary;
      }
    }

    &__checkbox:checked + &__button &__icon {
      background-color: transparent; // 选中之后button和icon继承父背景颜色 = 消失
      color: transparent;
      opacity: 0;
      visibility: hidden;
    }

    &__checkbox:checked ~ &__background {
      transform: scale(20);
      opacity: 1;
    }

    &__checkbox:checked ~ &__content {
      opacity: 0;
      width: 100%;
      z-index: 3000;
      animation: moveInLeft 1s ease-out .2s forwards;
    }

  }
</style>

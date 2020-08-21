<template>
  <account>
    <template v-slot:form>
      <v-form  ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field v-model="email" background-color="white" :counter="30"
                      :rules="emailRules" label="邮箱" filled shaped clearable
                      :loading="loadingEmail" clear-icon="fas fa-times"
                      @focus="loadingEmail = !loadingEmail" validate-on-blur
                      @blur="wrongEmail=false"
                      :error-messages="wrongEmail ? '这不是一个正确的邮箱哦' : ''"
                      required></v-text-field>
        <v-text-field v-model="code" background-color="white" :counter="6"
                      label="验证码" filled shaped clearable :rules="codeRules"
                      :loading="loadingCode" clear-icon="fas fa-times"
                      @focus="loadingCode = !loadingCode" validate-on-blur
                      required>
          <template v-slot:append-outer>
            <v-btn :loading="loadingSend" :disabled="loadingSend" color="success"
                   @click="sendEmail">发送
              <template v-slot:loader>
                <span class="custom-loader">
                  {{sendTimer}}
                </span>
              </template>
            </v-btn>
          </template>
        </v-text-field>
        <v-text-field v-model="newPassword" background-color="white"
                      :append-icon="showP ? 'far fa-eye fa-xs' : 'far fa-eye-slash fa-xs'"
                      :type="showP ? 'text' : 'password'"
                      class="input-group--focused"
                      @click:append="showP = !showP"
                      :rules="passwordRules" label="新密码" filled shaped
                      :loading="loadingNewPassword" @focus="loadingNewPassword = !loadingNewPassword"
                      style="font-size: 1.6rem" validate-on-blur
                      required></v-text-field>
      </v-form>
    </template>
    <template v-slot:buttons>
      <v-btn
        :loading="loadingButton"
        :disabled="loadingButton"
        block
        class="primary sign-in__body--commit"
        @click="change"
      >修改密码<v-icon right dark>fas fa-hippo</v-icon></v-btn>
    </template>
  </account>
</template>

<script>
import Account from '@/components/user/Account'

export default {
  name: 'Forget',
  components: { Account },
  data () {
    return {
      wrongEmail: false,
      valid: true,
      lazy: false,
      showP: false, // 默认不显示密码
      loadingButton: false,
      loadingEmail: true,
      loadingCode: true,
      loadingNewPassword: true,
      loadingSend: false,
      sendTimer: 60,
      email: '',
      code: '',
      newPassword: '',
      emailRules: [
        v => !!v || '要填邮箱哦',
        v => /.+@.+\..+/.test(v) || '这不是个正确的邮箱哦'
      ],
      passwordRules: [
        v => !!v || '要填密码哦',
        v => !!/[a-zA-Z0-9.]/.test(v) || '这不是个正确的密码哦',
        v => v.length >= 8 || '密码最少八位哦'
      ],
      codeRules: [
        v => !!v || '要填验证码哦',
        v => v.length === 6 || '验证码有六位哦'
      ]
    }
  },
  methods: {
    sendEmail () {
      let vm = this
      if (!vm.email || !/.+@.+\..+/.test(vm.email)) vm.wrongEmail = true
      else {
        vm.loadingSend = true
        var timer = setInterval(() => {
          if (!vm.sendTimer) {
            clearInterval(timer)
            vm.loadingSend = false
          }
          vm.sendTimer -= 1
        }, 1000)
        // // 记得finally清除一次interval
      }
    },
    validate () {
      return this.$refs.form.validate()
    },
    change () {
      let vm = this
      if (vm.validate()) {
        vm.loadingButton = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  >>> .v-text-field__details{overflow: visible;}

  .theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #1976d2 !important;
  }
  .theme--light.v-btn.v-btn--disabled {
    color: $color-primary !important;
  }
</style>

<template>
  <account>
    <template v-slot:form>
      <v-form  ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field v-model="email" background-color="white" :counter="30"
                      :rules="emailRules" label="邮箱" filled shaped clearable
                      :loading="loadingEmail" clear-icon="fas fa-times"
                      @focus="loadingEmail = !loadingEmail" validate-on-blur
                      @blur="errorEmail = false"
                      :error="errorEmail"
                      required></v-text-field>
        <v-text-field v-model="password" background-color="white"
                      :append-icon="showP ? 'far fa-eye fa-xs' : 'far fa-eye-slash fa-xs'"
                      :type="showP ? 'text' : 'password'"
                      class="input-group--focused"
                      @blur="errorPassword = false"
                      :error="errorPassword"
                      @click:append="showP = !showP"
                      :rules="passwordRules" label="密码" filled shaped
                      :loading="loadingPassword" @focus="loadingPassword = !loadingPassword"
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
        @click="login"
      >登陆<v-icon right dark>fab fa-earlybirds</v-icon></v-btn>
    </template>
    <template v-slot:footer>
      忘记密码？<a @click="toForget" class="footer">点击找回&rarr;</a>
    </template>
  </account>
</template>

<script>
import Account from '@/components/user/Account'
import user from '@/methods/user'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Login',
  computed: {
    ...mapState({
      token: (state) => state.token,
      refresh_token: (state) => state.refresh_token
    })
  },
  components: {Account},
  data () {
    return {
      valid: true,
      lazy: false,
      showP: false, // 默认不显示密码
      loadingButton: false,
      loadingEmail: true,
      loadingPassword: true,
      errorEmail: false,
      errorPassword: false,
      email: '',
      emailRules: [
        v => !!v || '要填邮箱哦',
        v => /.+@.+\..+/.test(v) || '这不是个正确的邮箱哦'
      ],
      password: '',
      passwordRules: [
        v => !!v || '要填密码哦',
        v => !!/[a-zA-Z0-9.]/.test(v) || '这不是个正确的密码哦',
        v => v.length >= 8 || '密码最少八位哦？'
      ]
    }
  },
  methods: {
    ...mapMutations({
      addToken: 'SET_TOKEN',
      addRefreshToken: 'SET_REFRESH_TOKEN'
    }),
    login () {
      let vm = this
      if (vm.validate()) {
        vm.loadingButton = true
        let params = {
          email: vm.email,
          password: vm.password
        }
        user.login(params).then(
          (rsp) => {
            vm.addToken(rsp.data.access_token)
            vm.addRefreshToken(rsp.data.refresh_token)
            this.$router.push({name: 'Home'})
          }
        ).catch(() => {
          vm.errorEmail = true
          vm.errorPassword = true
        }).finally(() => {
          vm.loadingButton = false
        })
      }
    },
    validate () {
      return this.$refs.form.validate()
    },
    toForget () {
      this.$router.push({ name: 'Forget' })
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

  .footer {
    text-decoration: none;
    font-size: 1.2rem;
    color: $color-primary;
  }
</style>

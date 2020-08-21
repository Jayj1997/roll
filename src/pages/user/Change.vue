<template>
  <account>
    <template v-slot:form>
      <v-form  ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field v-model="email" background-color="white" :counter="30"
                      :rules="emailRules" label="邮箱" filled shaped clearable
                      :loading="loadingEmail" clear-icon="fas fa-times"
                      @focus="loadingEmail = !loadingEmail" validate-on-blur
                      required></v-text-field>
        <v-text-field v-model="password" background-color="white"
                      :append-icon="showP ? 'far fa-eye fa-xs' : 'far fa-eye-slash fa-xs'"
                      :type="showP ? 'text' : 'password'"
                      class="input-group--focused"
                      @click:append="showP = !showP"
                      :rules="passwordRules" label="旧密码" filled shaped
                      :loading="loadingOldPassword" @focus="loadingOldPassword = !loadingOldPassword"
                      style="font-size: 1.6rem" validate-on-blur
                      required></v-text-field>
        <v-text-field v-model="password" background-color="white"
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
      >修改密码<v-icon right dark>fas fa-dove</v-icon></v-btn>
    </template>
  </account>
</template>

<script>
import Account from '@/components/user/Account'

export default {
  name: 'Change',
  components: { Account },
  data () {
    return {
      valid: true,
      lazy: false,
      showP: false, // 默认不显示密码
      email: '',
      loadingEmail: true,
      loadingOldPassword: true,
      loadingNewPassword: true,
      password: '',
      loadingButton: false,
      emailRules: [
        v => !!v || '要填邮箱哦',
        v => /.+@.+\..+/.test(v) || '这不是个正确的邮箱哦'
      ],
      passwordRules: [
        v => !!v || '要填密码哦',
        v => !!/[a-zA-Z0-9.]/.test(v) || '这不是个正确的密码哦',
        v => v.length >= 8 || '密码最少八位哦？'
      ]
    }
  },
  methods: {
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

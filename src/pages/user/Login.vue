<template>
  <account>
    <template v-slot:text-fields>
      <v-text-field v-model="email" background-color="white" :counter="30" height="5rem"
                    :rules="emailRules" label="邮箱" filled shaped clearable
                    :loading="loadingEmail" clear-icon="fas fa-times"
                    @focus="loadingEmail = !loadingEmail" validate-on-blur
                    required></v-text-field>
      <v-text-field v-model="password" background-color="white" height="5rem"
                    :append-icon="showP ? 'far fa-eye fa-xs' : 'far fa-eye-slash fa-xs'"
                    :type="showP ? 'text' : 'password'"
                    class="input-group--focused"
                    @click:append="showP = !showP"
                    :rules="passwordRules" label="密码" filled shaped
                    :loading="loadingPassword" @focus="loadingPassword = !loadingPassword"
                    style="font-size: 1.6rem" validate-on-blur
                    required></v-text-field>
    </template>
    <template v-slot:buttons>
    </template>
  </account>
</template>

<script>
import Account from '@/components/user/Account'

export default {
  name: 'Login',
  components: {Account},
  data () {
    return {
      loadingEmail: true,
      loadingPassword: true,
      email: '',
      emailRules: [
        v => !!v || '要填邮箱哦',
        v => /.+@.+\..+/.test(v) || '这不是个正确的邮箱哦'
      ],
      password: '',
      passwordRules: [
        v => !!v || '要填密码哦',
        v => !!/[a-zA-Z0-9.]/.test(v) || '这不是个正确的密码哦',
        v => v.length >= 8 || '好歹填八个啊？'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  >>> .v-text-field__details{overflow: visible;}

</style>

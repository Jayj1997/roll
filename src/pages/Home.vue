<template>
  <div class="home">
    <navigator></navigator>
    <router-view class="home__content"></router-view>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import Background from '@/components/Background'
import user from '@/methods/api/user'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    Navigator,
    Background
  },
  mounted () {
    let vm = this
    if (!vm.userDetail) {
      user.details().then(
        (rsp) => {
          vm.setUser(rsp.data) // todo 不能写使用user.id的show方法 有安全隐患
        }
      )
    }
  },
  computed: {
    ...mapState({
      userDetail: (state) => state.user
    })
  },
  methods: {
    ...mapMutations({
      setUser: 'SET_USER',
      clearUser: 'CLEAR_USER'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/main';

  .home {
    position: relative;
    height: 100vh;
    width: 100%;

    &__content {
      margin-left: 56px;

      @include respond(phone) {
        margin-left: 0;
      }
    }
  }
</style>

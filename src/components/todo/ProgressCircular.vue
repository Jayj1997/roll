<template>
  <v-card class="mx-auto text-center" :rounded="false" elevation="10"
          style="margin-top: 1rem">
    <v-card-text style="padding: 2rem .5rem">
      <v-sheet>
        <v-container fluid style="width: 500px">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="20"
            :value="rotateValue"
            :indeterminate="false"
            color="teal">
            {{rotateText}}
          </v-progress-circular>
        </v-container>
      </v-sheet>
    </v-card-text>
    <v-card-text style="padding: 1rem">
      <div class="display-1 font-weight-thin" style="font-size: 1.4rem!important;">
        项目完成度
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProgressCircular',
  props: {
    items: {
      required: true,
      types: Array
    }
  },
  data () {
    return {
      rotate: true
    }
  },
  computed: {
    rotateValue: {
      get: function () {
        let vm = this
        let value = 0
        let length = vm.items.length
        vm.items.forEach((item) => {
          if (item.finish_at) value++
        })
        vm.rorateText = `${value}` + '/' + `${length}`
        return Math.round((value / length) * 100)
      }
    },
    rotateText: {
      get: function () {
        let vm = this
        let value = 0
        let length = vm.items.length
        vm.items.forEach((item) => {
          if (item.finish_at) value++
        })
        return `${value}` + '/' + `${length}`
      }
    }
  }
}
</script>

<style scoped>

</style>

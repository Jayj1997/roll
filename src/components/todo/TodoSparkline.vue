<template>
  <v-card class="mx-auto text-center" :rounded="false" elevation="10" style="margin-top: 1rem">
    <v-card-text style="padding: 2rem .5rem">
      <v-sheet>
        <v-container fluid style="width: 500px">
          <v-sparkline
            style="overflow: visible"
            :fill="fill"
            :gradient="gradient"
            :padding="padding"
            :labels="week"
            label-size="10"
            :smooth="radius || false"
            :value="value"
            auto-draw>
          </v-sparkline>
        </v-container>
      </v-sheet>
    </v-card-text>
    <v-card-text style="padding: 1rem">
      <div class="display-1 font-weight-thin" style="font-size: 1.4rem!important;">
        本周完成度
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { isThisWeek, getDay, parseISO } from 'date-fns'
export default {
  name: 'TodoSparkline',
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      fill: true,
      gradient: ['#f72047', '#ffd200', '#1feaea'],
      padding: 8,
      radius: 10,
      week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      // value: [0, 0, 0, 0, 0, 0, 0]
    }
  },
  computed: {
    value: {
      get () {
        let vm = this
        let value = [0, 0, 0, 0, 0, 0, 0]
        vm.items.forEach((item) => {
          if (item.finish_at !== null) {
            let day = parseISO(item.finish_at)
            if (isThisWeek(day)) {
              value[getDay(day) - 1]++
            }
          }
        })
        return value
      },
      set (val) {}

    }
  },
  methods: {
    add () {
      this.value = [0, 1, 0, 0, 0, 0, 0]
    }
  }
}
</script>

<style scoped>

</style>

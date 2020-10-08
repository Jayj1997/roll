<template>
  <v-card class="mx-auto text-center" :rounded="false" elevation="10" style="margin-top: 1rem">
    <v-card-text style="padding: 2rem .5rem">
      <v-sheet>
        <v-container fluid style="width: 500px">

        </v-container>
      </v-sheet>
    </v-card-text>
    <v-card-text style="padding: 1rem">
      <div class="display-1 font-weight-thin" style="font-size: 1.4rem!important;">
        完成历史
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TodoHistory',
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>

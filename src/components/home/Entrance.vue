<template>
  <div class="roll">
    <div class="cards-container">
      <div class="card-container" v-for="card in cards" :key="card.background"
           :style="{backgroundImage: 'url('+ card.background + ')',backgroundSize: '100%, 100%'}">
        <div class="word-wrap">
          <h2>{{card.title}}</h2>
          <span>{{card.subTitle}}</span>
        </div>
      </div>
    </div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
</template>

<script>
export default {
  name: 'entrance',
  data () {
    return {
      cards: {
        todo: {
          background: require('@/assets/images/todo.jpeg'),
          title: 'To Do',
          subTitle: '一无所值直到你开始行动',
          url: ''
        },
        run: {
          background: require('@/assets/images/run.jpeg'),
          title: 'Run',
          subTitle: '坚持为的不只是减肥，而是坚持本身'
        },
        treasure: {
          background: require('@/assets/images/mansion.jpeg'),
          title: 'Treasure',
          subTitle: '记录并简单预测未来经济状况'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .roll {
    margin-top: 40px;
    /*height: 100%;*/
    background-color: rgba(243, 234, 207, 0.5);
  }

  .cards-container {
    padding-top: 15px;
    /*display: flex;*/
    /*justify-content: center;*/

    .card-container {
      margin: 0 auto 15px;
      width: 90%;
      border-radius: 20px;
      .word-wrap {
        color: #d3efff;
        padding-top: 30px;
        padding-bottom: 30px;
      }
    }
  }
</style>

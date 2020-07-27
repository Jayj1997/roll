<template>
  <div id="TabBar" class="tab-bar row">
    <div class="col-4 tab-bar-item" @click="didClickedItem('Home')"
         :class="{'active1': tag === 'Home' ? true : ''}">
      <div class="row">
        <i class="fa fa-home col-12"></i>
        <span class="col-12">首页</span>
      </div>
    </div>
    <div class="col-4 tab-bar-item" @click="didClickedItem('Function')"
         :class="{'active2': tag === 'Function' ? true : ''}">
      <div class="row">
        <i class="fa fa-bars col-12"></i>
        <span class="col-12">功能</span>
      </div>
    </div>
    <div class="col-4 tab-bar-item" @click="didClickedItem('Mine')"
         :class="{'active3': tag === 'Mine' ? true : ''}">
      <div class="row">
        <i class="fa fa-user-o col-12"></i>
        <span class="col-12">我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data: function () {
    return {
      tag: ''
    }
  },
  mounted () {
    this.tag = this.$route.name
  },
  methods: {
    didClickedItem: function (tag) {
      if (this.tag !== tag) {
        this.tag = tag
        this.$emit('select-item', tag)
      }
    }
  }
}
</script>

<style scoped>
  .tab-bar {
    text-align: center;
    background-color: white;
    height: 4.5rem;
    /*border: 0 solid rgb(210, 210, 210);*/
    border-top-width: 1px;
    position: fixed;
    margin: auto;
    bottom: 0;
    width: 100%;
    color: gray;
  }

  .tab-bar-item {
    height: 4.5rem;
    margin-top: 4px;
  }

  .active1 {
    color: red;
  }
  .active2 {
    color: #b1b105;
  }
  .active3 {
    color: blue;
  }

  i {
    font-size: 20px;
  }

  span {
    font-size: 14px;
  }
</style>

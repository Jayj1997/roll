<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    axios.get('http://127.0.0.1:8000/api/test')
      .then(response => (this.msg = response.data))
    // todo 升级webpack4 参照视频 并写出全局方法可以调用请求路由器 访问后端
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

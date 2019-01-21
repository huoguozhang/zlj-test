const code = `<template>
  <div>
    我是display的内容哈
    <h1>{{title}}</h1>
    <h2>现在时间:{{date}}</h2>
    <el-button @click="sayHello">say hello</el-button>
    <div class="main">
      <div class="left">
      </div>
      <div class="right">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: new Date().toLocaleString(),
      title: '我是title'
    }
  },
  methods: {
    sayHello () {
      this.$message.info('hello world!')
    }
  },
  created () {
    setInterval(() => {
      this.date = new Date().toLocaleString()
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.main{
  display: flex;
  border: 1px solid;
  height: 400px;
  .left{
    width: 200px;
    background: red;
  }
  .right{
    flex: 1;
    background: green;
  }
}
</style>
  `
export default code
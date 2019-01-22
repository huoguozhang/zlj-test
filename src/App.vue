<template>
  <div id="app">
    <el-button @click="showMessage">展示消息</el-button>
    <son v-if="false"></son>
    <myAlert></myAlert>
    <myDisplay v-if="false"></myDisplay>
  </div>
</template>
<script>
import son from './views/s.vue'
import myDisplay from './components/myDisplay.vue'
import userDisplay from './views/userDisplay.js'
import myAlert from './components/myAlert.vue'
export default {
  name: 'app',
  components: {
    son,
    myDisplay,
    myAlert
  },
  data () {
    return {
      userDisplay
    }
  },
  methods: {
    showMessage () {
      this.$Alert({
        content: '你好',
        duration: 10
      })
    }
  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

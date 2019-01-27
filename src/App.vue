<template>
  <div id="app">
    <component :is="zlj">hhh</component>
    <self></self>
    <tableRender v-if="false"></tableRender>
    <el-button @click="showMessage">展示消息</el-button>
    <son v-if="false"></son>
    <myAlert v-if="false"></myAlert>
    <myDisplay v-if="false"></myDisplay>
  </div>
</template>
<script>
import self from './views/self'
import son from './views/s.vue'
import myDisplay from './components/myDisplay.vue'
import userDisplay from './views/userDisplay.js'
import myAlert from './components/myAlert.vue'
import tableRender from './views/tableRender'
export default {
  name: 'app',
  components: {
    self,
    son,
    myDisplay,
    myAlert,
    tableRender
  },
  data () {
    return {
      zlj: self,
      userDisplay
    }
  },
  methods: {
    showMessage () {
      this.s
     /* this.$Alert({
        content: '你好',
        duration: 10
      }) */
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

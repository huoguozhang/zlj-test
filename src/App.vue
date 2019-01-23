<template>
  <div id="app">
    <tableRender></tableRender>
    <Test></Test>
    <el-button @click="showMessage">展示消息</el-button>
    <son v-if="false"></son>
    <myAlert v-if="false"></myAlert>
    <myDisplay v-if="false"></myDisplay>
  </div>
</template>
<script>
import son from './views/s.vue'
import myDisplay from './components/myDisplay.vue'
import userDisplay from './views/userDisplay.js'
import myAlert from './components/myAlert.vue'
import tableRender from './views/tableRender'
import Vue from 'vue'
const Child = {
  render: h => {
    return h('p', 'text')
  }
}
const Test = Vue.component('Test', {
  render: h => {
    const ChildNode = h(Child)
    return h('div', [
      ChildNode,
      ChildNode,
      ChildNode,
      ChildNode,
      ChildNode
    ])
  }
})
export default {
  name: 'app',
  components: {
    son,
    myDisplay,
    myAlert,
    Test,
    tableRender
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

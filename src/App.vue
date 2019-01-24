<template>
  <div id="app">
    <Test>
      <template slot-scope="data">
        <b>{{data}}</b>
      </template>
    </Test>
    <tableRender></tableRender>
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
const Test = {
    data () {
      return {
        test: 'hello world',
        userInfo: {
          name: '张理健',
          age: 26,
          sex: 'M'
        }
      }
    },
    created () {
    },
    template: `
    <div>
      <h1>
        <slot :test="test" :userInfo="userInfo"></slot>
      </h1>
    </div>
  `
  }
export default {
  name: 'app',
  components: {
    son,
    myDisplay,
    myAlert,
    tableRender,
    Test
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

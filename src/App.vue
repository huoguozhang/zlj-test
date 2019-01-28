<template>
  <div id="app">
    <tree :data="data2"></tree>
    <tableRender v-if="false"></tableRender>
    <el-button @click="showMessage">展示消息</el-button>
    <son v-if="false"></son>
    <myAlert v-if="false"></myAlert>
    <myDisplay v-if="false"></myDisplay>
  </div>
</template>
<script>
import tree from './components/tree/tree'
import son from './views/s.vue'
import myDisplay from './components/myDisplay.vue'
import userDisplay from './views/userDisplay.js'
import myAlert from './components/myAlert.vue'
import tableRender from './views/tableRender'
export default {
  name: 'app',
  components: {
    tree,
    son,
    myDisplay,
    myAlert,
    tableRender
  },
  data () {
    return {
      zlj: self,
      userDisplay,
      data2: [{
        id: 1,
        title: '一级 1',
        children: [{
          id: 4,
          title: '二级 1-1',
          children: [{
            id: 9,
            title: '三级 1-1-1'
          }, {
            id: 10,
            title: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        title: '一级 2',
        children: [{
          id: 5,
          title: '二级 2-1'
        }, {
          id: 6,
          title: '二级 2-2'
        }]
      }, {
        id: 3,
        title: '一级 3',
        children: [{
          id: 7,
          title: '二级 3-1'
        }, {
          id: 8,
          title: '二级 3-2'
        }]
      }]
    }
  },
  methods: {
    showMessage () {
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

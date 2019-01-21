<template>
  <div id="app">
    <myDisplay :code="userDisplay"></myDisplay>
    <son></son>
  </div>
</template>
<script>
import son from './views/s.vue'
import myDisplay from './components/myDisplay.vue'
import userDisplay from './views/userDisplay.js'
export default {
  name: 'app',
  components: {
    son,
    myDisplay
  },
  data () {
    return {
      userDisplay
    }
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

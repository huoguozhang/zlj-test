<template>
  <div id="app">
    <myAlert></myAlert>
    <myDisplay :code="userDisplay" v-if="false"></myDisplay>
    <son v-if="false"></son>
  </div>
</template>
<script>
import son from './views/s.vue'
import myDisplay from './components/myDisplay.vue'
import userDisplay from './views/userDisplay.js'
import myAlert from './components/myAlert'
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

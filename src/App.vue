<template>
  <div id="app">
    <son></son>
  </div>
</template>
<script>
import son from './views/s.vue'
export default {
  name: 'app',
  components: {
    son
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

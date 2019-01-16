<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value () {
      type: String
    }
  },
  data () {
    return {
      currentValue: '',
      children: null
    }
  },
  methods: {
    updateModel () {
    }
  }
}
</script>
<style>
</style>
<template>
  <div>
    <label>
      <span>
        <input
          :checked="currentValue"
          @change="change"
          type="checkbox">
        <slot></slot>
      </span>
    </label>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentValue: false
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: true
    }
  },
  methods: {
    change (e) {
      this.currentValue = e.target.checked
      this.$emit('input', e.target.checked)
    }
  }
}
</script>
<style>
</style>
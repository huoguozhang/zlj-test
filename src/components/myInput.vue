<template>
  <div>
    <input
        type="text"
        :value="currentValue"
        @input="handleInput"
        @blur="handleBlur"
    >
  </div>
</template>
<script>
import emmit from '@/utils/emmit'
export default {
  name: 'myInput',
  mixins: [emmit],
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  created () {
    this.currentValue = this.value
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput (e) {
      let value =  e.target.value
      this.$emit('input', value)
      this.currentValue = value
      this.dispatch('myFormItem', 'form-change', value)
    },
    handleBlur () {
      this.dispatch('myFormItem', 'form-blur', this.currentValue)
    }
  }
}
</script>
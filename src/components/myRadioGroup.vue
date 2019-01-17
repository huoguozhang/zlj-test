<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from '../utils/assist'
import emmit from '@/utils/emmit.js'
export default {
  name: 'myRadioGroup',
  mixins: [emmit],
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      currentValue: '',
      children: null
    }
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  },
  mounted () {
    this.updateModel(true)
  },
  methods: {
    change (val) {
      this.currentValue = val
      this.$emit('input', val)
      this.$emit('on-change', val)
      this.dispatch('myFormItem', 'form-change', val)
    },
    updateModel (update) {
      this.children = findComponentsDownward(this, 'myRadio')
      if (this.children) {
        this.children.forEach(child => {
          child.model = this.value
          if (update) {
            child.group = true
            child.currentValue = this.value === child.label
          }
        })
      }
    }
  }
}
</script>
<style>
</style>
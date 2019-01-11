<template>
  <div>
    <label>
      <span>
        <input
            v-if="group"
            type="checkbox"
            :disabled="disabled"
            :value="label"
            v-model="model"
            @change="change">
        <input
          v-else
          :checked="currentValue"
          @change="change"
          type="checkbox">
        <slot></slot>
      </span>
    </label>
  </div>
</template>
<script>
import { findComponentUpward } from '../utils/assist'
export default {
  name: 'myCheckBox',
  data () {
    return {
      currentValue: false,
      model: [],
      group: false,
      parent: null
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'myCheckGroup')
    if (this.parent) {
      this.group = true
      this.parent.updateModel(true)
    } else {
      this.currentValue = this.value
    }
  },
  methods: {
    change (e) {
      if (this.disabled) {
        return false
      }
      let value = e.target.checked
      this.currentValue = value
      this.$emit('input', value) // v-model语法糖
      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value) // 通知checkGroup
        this.dispatch('iFormItem', 'on-form-change', value) // 通知formItem
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  }
}
</script>
<style>
</style>
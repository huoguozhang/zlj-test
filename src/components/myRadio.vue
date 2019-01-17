<template>
  <div>
    <label>
      <input
        v-if="group"
        :value="label"
        :disabled="disabled"
        :checked="currentValue"
        v-model="model"
        @change="change"
        type="radio">
      <input
        v-else
        :value="label"
        :disabled="disabled"
        :checked="currentValue"
        v-model="model"
        @change="change"
        type="radio" />
        <slot></slot>
    </label>
  </div>
</template>
<script>
import { findBrothersComponents, findComponentUpward } from '../utils/assist'
import emmit from '@/utils/emmit.js'
export default {
  mixins: [emmit],
  name: 'myRadio',
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
    },
    trueValue: {
    },
    falseValue: {
    }
  },
  data () {
    return {
      currentValue: false,
      model: '',
      group: false,
      parent: null
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'myRadioGroup')
    if (this.parent) {
      this.group = true
      this.parent.updateModel(true)
    } else {
      this.currentValue = this.value
    }
  },
  methods: {
    change (e) {
      if(this.group) {
        this.parent.change(this.model)
      } else {
        let radios = findBrothersComponents(this, 'myRadio')
        let value = e.target.checked
        this.currentValue = value
        this.$emit('input', this.model)
        radios.forEach(r => {
          r.currentValue = false
          r.model = this.model
          r.$emit('input', this.model)
        })
        this.$emit('on-change', value)
        this.dispatch('myFormItem', 'form-change', value)
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
<template>
  <div class="check-group">
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from '../utils/assist'
import emmit from '@/utils/emmit'
export default {
  name: 'myCheckGroup',
  mixins: [emmit],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      childrens: [],
      currentValue: this.value
    }
  },
  mounted () {
    this.updateModel(true)
  },
  watch: {
    value () {
      // 流程大概是这样的
      // 1:用户点击某个框,boxCheck的绑定的值增加一项,触发change事件,执行parent.change
      // 2: parent.change () {触发input事件，外面绑定的v-model：变化，props:的value变化}
      // 3：外面的value变化之后保持所有子组件的值相同
      this.updateModel(true)
    }
  },
  methods: {
    change (val) {
      this.currentValue = val
      this.$emit('input', val)
      this.$emit('on-change', val)
      // this.dispatch('myFormItem', 'form-change', val)
    },
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'myCheckBox')
      if (this.childrens) {
        const { value } = this
        this.childrens.forEach(child => {
          // 一个box的model变了其他的也变成相同的值
          child.model = value
          if (update) {
            child.group =  true
            // 更新是否点击
            child.currentValue = value.indexOf(child.label) >= 0
          }
        })
      }
    }
  }
}
</script>
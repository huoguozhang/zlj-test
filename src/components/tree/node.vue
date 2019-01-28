<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <myCheckBox
        style="display: inline-block;"
        v-if="showCheckbox"
        :value="data.checked"
        @input="handleCheck"
      ></myCheckBox>
      <span>{{data.title}}</span>
      <template v-if="data.expand">
        <tree-node
            v-for="(item, index) in data.children"
            :key="index"
            :data="item"
            :showCheckbox="showCheckbox"
        ></tree-node>
      </template>
    </li>
  </ul>
</template>
<script>
import myCheckBox from '../myCheckBox'
import { findComponentUpward } from '../../utils/assist'
export default {
  name: 'TreeNode',
  components: { myCheckBox },
  props: {
    data : {
      type: Object,
      default () {
        return {}
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tree: findComponentUpward(this, 'Tree')
    }
  },
  watch: {
    // 选中了某一项父组件也要改变
    'data.children': {
      handler (val) {
        if (val) {
          const checkAll = !val.some(v => !v.checked) // 有一个为false结束循环
          this.$set(this.data, 'checked', checkAll)
        }
      },
      deep: true
    }
  },
  methods: {
    handleCheck (checked) {
      this.updateTreeDown(this.data, checked)
    },
    // 当点击某个勾选框的时候向下更新所有的子
    updateTreeDown (data, checked) {
      this.$set(data, 'checked', checked)
      if (data.children && data.children.length) {
        data.children.forEach(child => this.updateTreeDown(child, checked))
      }
    },
    handleExpand () {
      this.$set(this.data, 'expand', !this.data.expand)
      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    }
  }
}
</script>
<style>
.tree-ul, .tree-li{
  list-style: none;
  padding-left: 10px;
}
.tree-expand{
  cursor: pointer;
}
</style>
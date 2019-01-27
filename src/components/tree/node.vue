<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <myCheckBox
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
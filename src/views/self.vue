<template>
  <div>
    <h5>我是递归组件</h5>
    <self v-if="count < 5 " :count="count+1"></self>
  </div>
</template>
<script>
export default {
  name: 'self',
  props: {
    count: {
      default: 1,
      type: Number
    }
  }
}
</script>
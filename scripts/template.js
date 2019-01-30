module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}-page-ct">
    ${compoenntName}组件
  </div>
</template>
<script>
export default {
  name: '${compoenntName}'
}
</script>
<style lang="scss" scoped>
.${compoenntName}-page-ct {

}
</style>
`

  },
  entryTemplate: `import Main from './main.vue'
export default Main`
}
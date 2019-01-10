<template>
  <div class="check-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'myCheckGroup',
  props: {
    value: {
      type: Array
    }
  },
  created () {
    this.$on('')
  },
  methods: {
    change (val) {

    },
    updateModel () {

    }
  }
}
</script>
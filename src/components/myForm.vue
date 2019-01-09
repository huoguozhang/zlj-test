<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import emmit from '@/utils/emmit.js'
export default {
  name: 'myForm',
  mixin: emmit,
  props: {
    rules: {
      type: Object
    },
    model: {
      type: Object
    }
  },
  provide () {
    return {
      form: this
    }
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    this.$on('add-form-item', (item) => {
      if (item) this.fields.push(item)
    })
    this.$on('remove-form-item', (item) => {
      this.fields.splice(this.fields.indexOf(item), 1)
    })
  }
}
</script>
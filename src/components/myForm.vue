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
  methods: {
    resetFields () {
      // 重置整个表单
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    // 校验整个表单
    validate (callback) {
      return new Promise(resolve => {
        let counts = 0
        let pass = true
        this.fields.forEach(field => {
          field.validate('', error => {
            if (error) {
              pass = false
            }
            if (++counts === this.fields.length) {
              resolve(pass)
              if (typeof callback === 'function') {
                callback(pass)
              }
            }
          })
        })
      })
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
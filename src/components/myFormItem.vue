<template>
  <div class="comp-ct">
    <label v-if="label" :class="{ 'my-form-item-label-required': isRequired }">{{ label }}</label>
    <slot>
    </slot>
    <div class="my-form-item-message" v-if="validateState==='error'">
      {{validateMessage}}
    </div>
  </div>
</template>
<script>
import emmit from '../utils/emmit'
import AsyncValidator from 'async-validator'
export default {
  name: 'myFormItem',
  mixins: [emmit],
  inject: ['form'],
  props: {
    prop: {
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      initValue: '',
      isRequired: false,
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过时的提示信息
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop];
    }
  },
  methods: {
    setRules () {
      let rules = this.getRules()
      if (rules.length > 0) {
        rules.some(v => this.isRequired =  v.required || false)
      }
      this.$on('form-change', this.onFieldChange)
      this.$on('form-blur', this.onFieldBlur)
    },
    getRules () {
      // 获取定义的校验规则
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules)
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule (trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    validate(trigger, callback = function () {}) {
      let rules = this.getFilteredRule(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      // 设置状态为校验中
      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      let descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)
      let model = {}
      model[this.prop] = this.fieldValue
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      this.validate('change')
    },
    // 重置数据
    resetField () {
      this.validateState = '' // 校验状态
      this.validateMessage = ''
      this.form.model[this.prop] = this.initValue
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('myForm', 'add-form-item', this)
      this.initValue = this.fieldValue // 缓存初始值
      this.setRules()
    }
  },
  beforeDestroy () {
    if (this.prop) {
      this.dispatch('myForm', 'remove-form-item', this)
    }
  }
}
</script>
<style scoped>
  .comp-ct{
    display: flex;
    margin: 24px;
  }
</style>
<style>
  .my-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .my-form-item-message {
    color: red;
  } 
</style>
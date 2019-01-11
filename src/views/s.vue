<template>
  <div>
    <myForm :rules="rules" :model="userForm" ref="myForm">
      <myFormItem prop="name" label="用户名">
        <my-input type="text" v-model="userForm.name"></my-input>
      </myFormItem>
      <myFormItem prop="email" label="邮箱">
        <my-input type="email" v-model="userForm.email"></my-input>
      </myFormItem>
      <myFormItem label="想要就业的城市" prop="city">
        <myCheckGroup v-model="userForm.city">
          <myCheckBox label="hangzhou">杭州</myCheckBox>
          <myCheckBox label="shenzhen">深圳</myCheckBox>
          <myCheckBox label="beijing">北京</myCheckBox>
          <myCheckBox label="shanghai">上海</myCheckBox>
        </myCheckGroup>
      </myFormItem>
      <myFormItem>
        <el-button @click="submit('myForm')">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </myFormItem>
    </myForm>
  </div>
</template>
<script>
import emitter from '../utils/emmit'
// import { findComponentUpward } from '../utils/helper'
import myInput from '../components/myInput.vue'
import myForm from '../components/myForm'
import myFormItem from '../components/myFormItem'
import myCheckBox from '../components/myCheckBox.vue'
import myCheckGroup from '../components/myCheckGroup'
export default {
  components: {
    myForm, myFormItem, myInput, myCheckBox, myCheckGroup
  },
  mixins: [emitter],
  name: 'son',
  data () {
    return {
      checkedNames: [],
      userForm: {
        name: '',
        email: '',
        isAgree: true,
        city: []
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'blur' },
          { type: 'array', message: '格式不正确', trigger: 'change' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    submit (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$message.success('校验通过')
        } else {
          this.$message.error('信息不完整或者不符合要求!')
        }
      })
    },
    resetForm () {
      this.$refs.myForm.resetFields()
    }
  }
}
</script>
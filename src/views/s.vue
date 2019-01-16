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
      <myFormItem label="性别:" prop="sex">
        <myRadio v-model="userForm.sex" label="male">
          男
        </myRadio>
        <myRadio v-model="userForm.sex" label="female">
          女
        </myRadio>
      </myFormItem>
      <myFormItem label="接受调剂">
        <myRadioGroup>
          <myRadio label="accept">接受</myRadio>
          <myRadio label="refuse">不接受</myRadio>
        </myRadioGroup>
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
import myRadio from '../components/myRadio.vue'
import myRadioGroup from '../components/myRadioGroup.vue'
export default {
  components: {
    myForm, myFormItem, myInput, myCheckBox, myCheckGroup, myRadio, myRadioGroup
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
        city: [],
        sex: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        city: [
          { required: true, type: 'array', message: '城市为必填项', trigger: 'change' },
          { required: true, type: 'array', message: '城市为必填项', trigger: 'blur' }
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
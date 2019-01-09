<template>
  <div>
    <myForm :rules="rules" :model="userForm" ref="myForm">
      <myFormItem prop="name" label="用户名">
        <my-input type="text" v-model="userForm.name"></my-input>
      </myFormItem>
      <myFormItem prop="email" label="邮箱">
        <my-input type="email" v-model="userForm.email"></my-input>
      </myFormItem>
      <myFormItem>
        <el-button @click="submit">提交</el-button>
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
export default {
  components: {
    myForm, myFormItem, myInput
  },
  mixins: [emitter],
  name: 'son',
  data () {
    return {
      joyText: '考上清华大学长河分校',
      userForm: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    submit () {},
    resetForm () {
      this.$refs.myForm.resetFields()
    }
  }
}
</script>
<template>
    <el-form status-icon ref="loginForm" label-width="100px" class="loginForm sign-in-form" :model="loginUser" :rules="rules">
        <el-form-item label="邮箱" prop="email">
            <el-input type="password" v-model="loginUser.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn" @click="handleLogin('loginForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { getCurrentInstance } from 'vue'
export default {
    props: {
        loginUser: {
            type: Object,
            require: true
        },
        rules: {
            type: Object,
            require: true
        }
    },
    setup () {
        const { ctx }= getCurrentInstance()
        const handleLogin = (formName: string) => {
            ctx.$refs[formName].validate((valid: boolean) => {
                if (valid) {
                    alert('submit')
                } else {
                    return false
                }
            })
        }
        return {
            handleLogin
        }
    }
  }
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
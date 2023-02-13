<template>
  <div>
    <form class="login-form">
      <div class="login-form-item">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="loginData.identifier" />
      </div>
      <div class="login-form-item">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="loginData.password" />
      </div>
      <div class="login-form-item">
        <div type="button" @click="useLogin">登录</div>
      </div>
      <div>
        <div @click="useLogout">退出</div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

let loginData = reactive({ identifier: "", password: "" })

const { login, logout } = useStrapiAuth()

const useLogin = async () => {
  try {
    let a = await login(loginData)
    console.log(a)
  } catch (e) {
    console.log(e)
  }
}

const useLogout = async () => {
  logout()
}

</script>

<style scoped>

</style>
<template>
  <div>
    <form class="login-form">
      <div class="login-form-item">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="login-form-item">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" />
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

let username = ref("")
let password = ref("")

const { login } = useStrapiAuth()

const useLogin = async () => {
  try {
    let a = await login({ identifier: username.value, password: password.value })

    console.log(a)

    localStorage.setItem("user_token", a.jwt);
    // LocalStorage 并不安全！！！。。httpOnly Cookie 更好。

  } catch (e) { }
}
const { logout } = useStrapiAuth()
const useLogout = async () => {
  logout()
  localStorage.removeItem("user_token");
}

</script>

<style scoped>

</style>
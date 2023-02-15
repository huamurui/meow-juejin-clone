<template>
  <div>
    <div v-if="!isLogin" class="login">
      <button id="show-modal" @click="showModal = true">登录</button>
      <Teleport to="body">
        <!-- 使用这个 modal 组件，传入 prop -->
        <JuejinModal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>login</h3>
          </template>
          <template #body>
            <form class="login-form">
              <div class="login-form-item">
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="loginData.identifier" />
              </div>
              <div class="login-form-item">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="loginData.password" />
              </div>
              <div>
                <button type="button" @click="useLogin(), checkLogin()">登录</button>
              </div>
            </form>
          </template>
        </JuejinModal>
      </Teleport>
    </div>
    <div v-if="isLogin" class="login">
      {{ user?.username }}
      <NuxtLink to="/juejin">
        <img class="personal-img" scr="/nuxt/public/favicon.ico" />
      </NuxtLink>
      <button @click="useLogout">退出</button>
    </div>
  </div>
</template>

<script setup lang="ts">

let showModal = ref(false)
let isLogin = ref(false)
let user = useStrapiUser()

const checkLogin = () => {
  if (user.value) {
    isLogin.value = true
    showModal.value = false
    alert("登录成功")
  }

}


let loginData = reactive({ identifier: "", password: "" })

const { login, logout } = useStrapiAuth()

const useLogin = async () => {
  try {
    let a = await login(loginData)
    console.log(a)
    isLogin.value = true
  } catch (e) {
    console.log(e)

  }
}

const useLogout = async () => {
  logout()
  isLogin.value = false
  showModal.value = false
}

</script>

<style scoped>

</style>
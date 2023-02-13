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

    // 如果登录成功，这里的 a 里面就有 jwt。
    // 要存到 localStorage 里面，然后在一些需要权限的请求的时候用一下。建议是不要用cookie存这个jwt，因为cookie现在安全有问题...而session貌似要放后端。所以最后就是localStorage。

    // 而说到 localStorage... 用户选择的主题模式也是需要存一下的，但我现在也还是没写。

    // 而我现在在想的是...创建东西的时候可以直接通过 jwt 绑定作者吗？还是说作者也有一个特殊类型。就是...如果 jwt 是单纯的定性不定人的角色访问权限，那么真正上传的时候，作者信息会不会是可以篡改的...写tag category 不会有这样的烦恼本来就是一个人、视为整体的一群人去干...但...啊。

    // 在往之后的赞同喜欢也是...要标记。

    // 是我多虑了...登录后会自动存 cookie，只要有 cookie，之后的每次请求，只要是登录状态，就会带上 jwt，后端就可以知道是谁了。所以...这个问题不大。但不是说 cookie 安全有问题吗...我火星了？
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
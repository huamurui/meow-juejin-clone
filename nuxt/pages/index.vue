<template>

  <NuxtLink to="/juejin">Juejin Clone</NuxtLink> <a>← click here...比较惨不忍睹...可以的话，自己把样式重写一遍也可以</a>

  <div @click="onSubmit">login test</div>

  <NuxtLayout name="nondefault">
    <template #header>
      this is header
    </template>
    <template #content>
      this is content
    </template>
    <template #aside>
      this is aside
    </template>
  </NuxtLayout>

  <JuejinDialogSign />
</template>


<script setup lang="ts">



const { login } = useStrapiAuth()

const onSubmit = async () => {
  try {
    let a = await login({ identifier: 'mua', password: 'muamua' })

    console.log(a)

    // 如果登录成功，这里的 a 里面就有 jwt。
    // 要存到 localStorage 里面，然后在一些需要权限的请求的时候用一下。建议是不要用cookie存这个jwt，因为cookie现在安全有问题...而session貌似要放后端。所以最后就是localStorage。

    // 而说到 localStorage... 用户选择的主题模式也是需要存一下的，但我现在也还是没写。
  } catch (e) { }
}

// dialog form vue3
// https://dev.to/garmideroman/the-simplest-way-to-deal-with-modal-dialogs-in-vue-3-59hl


// const { reveal, onConfirm } = createConfirmDialog(JuejinSign, { question: 'Are you sure you want to hide the logo?' })

// onConfirm(() => {
//   showLogo.value = false
// })



definePageMeta({
  layout: false
});


useHead({
  title: 'meow 掘金',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ children: 'console.log(\'Hello world\')' }]
})
</script>

<style scoped lang="scss">
@import "~/assets/css/handle";


.emmmm {
  height: 110vh;

  font-size: 18px;
  @include font_color("font_color1");
  @include background_color("background_color1");
  @include border_color("border_color1");

}
</style>
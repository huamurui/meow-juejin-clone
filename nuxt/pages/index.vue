<template>

  <NuxtLink to="/juejin">Juejin Clone</NuxtLink> <a>← click here...比较惨不忍睹...可以的话，自己把样式重写一遍也可以</a>

  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <JuejinModalLoginAndSignup :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
      <template #body>
        <JuejinLogin />
      </template>
    </JuejinModalLoginAndSignup>
  </Teleport>


  <!-- <NuxtLayout name="nondefault">
    <template #header>
      this is header
    </template>
    <template #content>
      this is content
    </template>
    <template #aside>
      this is aside
    </template>
  </NuxtLayout> -->

</template>


<script setup lang="ts">
const showModal = ref(false)

// definePageMeta({
//   layout: false
// });


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
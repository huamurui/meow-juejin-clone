<template>
  <NuxtLink to="/juejin">Juejin Clone</NuxtLink> <a>← click here...比较惨不忍睹...可以的话，自己把样式重写一遍也可以</a>
  <h1>hello scss</h1>
  <div class="emmmm">
    <div>emmmm</div>
    <p>SCSS 有什么小的基础的，还有效果的语法吗</p>
    <p>yarn add sass --dev...就这一下就可以在模板里用scss了</p>
    <p>超，tailwind 你个折磨人的你看看人家</p>


    <div @click="change">
      switch theme
    </div>
  </div>
</template>

<script setup lang="ts">
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

let circle = ref(0)
const change = () => {
  if (circle.value === 0) {
    window.document.documentElement.setAttribute("data-theme", 'meow');
  } else {
    window.document.documentElement.setAttribute("data-theme", 'light');
  }
  circle.value = circle.value === 0 ? 1 : 0
}
</script>

<style scoped lang="scss">
@import "~/assets/css/handle";

.emmmm {
  p {
    font-size: 18px;
    @include font_color("font_color1");
    @include background_color("background_color1");
    @include border_color("border_color1");
  }
}
</style>
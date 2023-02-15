<template>

  <NuxtLink to="/juejin">Juejin Clone</NuxtLink> <a>← click here...比较惨不忍睹...可以的话，自己把样式重写一遍也可以</a>

  <div class="emmmm">
    just...something
  </div>
</template>


<script setup lang="ts">
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
  height: 120vh;

  font-size: 18px;
  @include font_color("font_color1");
  @include background_color("background_color1");
  @include border_color("border_color1");

}
</style>
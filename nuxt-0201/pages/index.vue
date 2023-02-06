<template>
  <NuxtLink to="/meows">Meows</NuxtLink> <a>← click here</a>

  <br>

  <NuxtLink to="/juejin">Juejin Clone</NuxtLink> <a>← click here...比较惨不忍睹...可以的话，自己把样式重写一遍也可以</a>
  <h1>hello scss</h1>
  <div class="emmmm">
    <div>emmmm</div>
    <p>SCSS 有什么小的基础的，还有效果的语法吗</p>
    <p>yarn add sass --dev...就这一下就可以在模板里用scss了</p>
    <p>超，tailwind 你个折磨人的你看看人家</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.emmmm {
  p {
    color: red;
  }
}
</style>
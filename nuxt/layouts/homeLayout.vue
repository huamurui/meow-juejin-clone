<template>
  <div class="home-page">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="aside">
        <slot name="aside"></slot>
      </div>
    </main>
  </div>
</template>
<!-- https://cn.vuejs.org/guide/components/slots.html#named-slots -->

<script setup lang="ts">
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content aside";

  .content {
    grid-area: content;
  }

  .aside {
    grid-area: aside;
  }
}
</style>
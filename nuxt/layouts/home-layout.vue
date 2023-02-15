<template>
  <div class="home-page">

    <header>
      <slot name="header"></slot>
    </header>
    <slot name="tags"></slot>

    <main>
      <div class="feed">
        <slot name="feed"></slot>
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
@import "~/assets/css/main.scss";

.home-page {
  @include background_color("background_color2");
}

main {
  @include background_color("background_color2");

  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  margin-right: 100px;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    margin-right: 0;
  }

  .feed {
    width: 100%;
  }

  .aside {
    margin-right: 100px;
  }

  @media screen and (max-width: 1000px) {
    .feed {
      margin-left: 0;
      margin-right: 0;
    }

    .aside {
      display: none;
      margin-right: 0;
    }
  }
}
</style>
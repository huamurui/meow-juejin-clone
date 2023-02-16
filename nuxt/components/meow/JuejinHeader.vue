<template>
  <header class="header">
    <MeowJuejinHeaderNav />

    <MeowJuejinHeaderSearch />

    <MeowJuejinHeaderUser />
</header>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.header-scroll-down {
  display: none;
}


.header {
  position: fixed;
  top: 0;
  @include background_color("background_color1");

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  max-width: 1440px;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
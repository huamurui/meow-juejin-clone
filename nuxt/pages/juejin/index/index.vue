<template>
  <JuejinHeader class="header"></JuejinHeader>
  <Tag class="tags"></Tag>
  <main class="content">
    <JuejinFeedArticles class="feed"></JuejinFeedArticles>
    <JuejinAside class="aside"></JuejinAside>
  </main>
</template>

<script setup lang="ts">
import Tag from './Tag/index.vue'
import Feed from './Feed/index.vue'

definePageMeta({
  layout: false
});

</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

main {
  @include background_color("background_color1");

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
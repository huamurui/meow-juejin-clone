<template>
  <Header class="header"></Header>
  <Tag></Tag>
  <main class="content">
    <Feed class="feed"></Feed>
    <Aside class="aside"></Aside>
  </main>
</template>

<script setup lang="ts">
import Header from './Header/index.vue'
import Tag from './Tag/index.vue'
import Feed from './Feed/index.vue'
import Aside from './Aside/index.vue'

</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

main {
  @include background_color("background_color1");
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "feed aside";

  /* justify-content: center; */
  .feed {

    margin-left: 200px;
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

    main {
      display: inline;
    }

  }
}
</style>
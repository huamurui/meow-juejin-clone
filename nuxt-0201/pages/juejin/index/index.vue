<template>
  <Header class="header"></Header>
  <Tag></Tag>
  <main>
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

<style scoped>
main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-area: "feed" "aside";
  /* justify-content: center; */
}

.feed {
  grid-area: "feed";
  margin-left: 200px;
}

.aside {
  grid-area: "aside";
  margin-right: 100px;
}

@media screen and (max-width: 768px) {

  main {
    display: grid;
    justify-content: center;
    grid-template-columns: 80vw;
    grid-area: "feed";
  }

  .feed {
    grid-area: "feed";
    margin-left: 0;
  }

  .aside {
    display: none;
  }
}
</style>
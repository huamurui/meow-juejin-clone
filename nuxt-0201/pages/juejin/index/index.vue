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
let showList: any = []

</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-area: "feed" "aside";
  justify-content: center;
}
</style>
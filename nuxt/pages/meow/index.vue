<template>
  <NuxtLayout name="home-layout">
    <template #header>
      <MeowJuejinHeader></MeowJuejinHeader>
    </template>
    <template #tags>
      <MeowJuejinTags></MeowJuejinTags>
    </template>
    <template #feed>
      <MeowJuejinFeedArticles :articles="response.data"></MeowJuejinFeedArticles>
    </template>
    <template #aside>
      <MeowJuejinAside></MeowJuejinAside>
    </template>
</NuxtLayout>
</template>

<script setup lang="ts">

const { find } = useStrapi()

const response = await find<Article>('articles', {
  populate: ['author', 'cover'],
  //这样只有一层的关系能被查出来...
})



</script>

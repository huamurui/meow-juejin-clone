<template>
  <NuxtLayout name="home-layout">
    <template #header>
      <JuejinHeader></JuejinHeader>
    </template>
    <template #tags>
      <JuejinTags></JuejinTags>
    </template>
    <template #feed>
      <JuejinFeedArticles :articles="response.data"></JuejinFeedArticles>
    </template>
    <template #aside>
      <JuejinAside></JuejinAside>
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

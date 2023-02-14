<template>
  <NuxtLayout name="home-layout">
    <template #header>
      <JuejinHeader></JuejinHeader>
    </template>
    <template #tags>
      <JuejinTags></JuejinTags>
    </template>
    <template #feed>
      <JuejinFeedArticles></JuejinFeedArticles>
    </template>
    <template #aside>
      <JuejinAside></JuejinAside>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">




</script>

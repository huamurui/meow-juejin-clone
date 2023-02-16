<template>
  <div>
    <NuxtLayout name="juejin-index">
      <template #header>
        <JuejinHeader></JuejinHeader>
      </template>
      <template #feed>
        <JuejinFeed :articles="response.data"></JuejinFeed>
      </template>
      <template #aside>
        <JuejinAside></JuejinAside>
      </template>
    </NuxtLayout>
</div>
</template>

<script setup lang="ts">
const { find } = useStrapi()

const response = await find<Article>('articles', {
  populate: ['author', 'cover'],
})


</script>

<style class="scss" scoped></style>
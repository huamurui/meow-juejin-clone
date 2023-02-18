<template>
  <div class="juejin">
    <NuxtLayout name="juejin-index">
      <template #header>
        <JuejinHeader></JuejinHeader>
        <JuejinHeaderTag></JuejinHeaderTag>
      </template>
      <template #content>
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

<style lang="scss" scoped>
@import "~/assets/css/handle";

* {
  @include font_color("font_color1");
  @include background_color("background_color1");
}
</style>
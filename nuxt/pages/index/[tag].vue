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

const route = useRoute()
let tag = route.params.tag
const response = await find<Article>('articles', {
  populate: ['author', 'cover'],
  filters: {
    category: {
      categoryName: tag
    }
  }
})


useHead({
  title: 'meow 掘金',
  meta: [
    { name: 'description', content: 'a website inspired by juejin.' },
    { name: 'keywords', content: 'juejin, meow, vue3, nuxt3, strapi' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})

</script>

<style lang="scss" scoped>
@import "~/assets/css/handle";

* {
  @include font_color("font_color1");
  @include background_color("background_color1");
}
</style>
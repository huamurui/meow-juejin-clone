<template>
  <div>
    <JuejinHeader></JuejinHeader>
    <div class="content">
      <BytemdViewer :markdowns="re.data.attributes.content" />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Article {
  title: string
  content: string
  author: string
}
const { findOne } = useStrapi()
const route = useRoute()
const id = route.params.id as string[]
const re = await findOne<Article>('articles', id[0])
</script>

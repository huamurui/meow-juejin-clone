<template>
  <div>
    <a href="https://juejin.cn" target="_blank">
      <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        alt="掘金" />
    </a>

    <div>
      <Bytemd :markdowns="re.data.attributes.content" />
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

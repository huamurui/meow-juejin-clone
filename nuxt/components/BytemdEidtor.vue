<template>
  <div>
    <div class="title-text">标题</div>
    <div class="title-input">
      <input type="text" v-model="article.title" />
    </div>
    <Editor class="size" :value="article.content" :plugins="plugins" @change="handleChange" />
    <div @click="onSubmit">提交</div>
  </div>
</template>

<script setup lang="ts">
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm'
import { Editor } from '@bytemd/vue-next'

const plugins = [
  gfm(),
  // Add more plugins here
]
const user = useStrapiUser()

let article = reactive({
  title: "",
  content: "",
  author: user
})
const handleChange = (value: string) => {
  article.content = value
}


const { create } = useStrapi()

const onSubmit = async () => {
  await create<Article>('articles', article)
}
</script>

<style scoped>
.size {
  width: 100vw;
  height: 100vh;
}

.bytemd .bytemd-split .bytemd-editor {
  height: 100vh;
}

/* ... 所以怎么才能让它自动全屏 */
</style>
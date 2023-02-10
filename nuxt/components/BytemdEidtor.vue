<template>
  <div>
    <Editor class="size" :value="markdowns" :plugins="plugins" @change="handleChange" />
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
// const props = defineProps<{
//   markdowns: string
// }>()
// const handleChange = (value: string) => {
//   props.markdowns = value
// }

let markdowns = ref("")
const handleChange = (value: string) => {
  markdowns.value = value
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
<template>
  <div>
    <!-- <Editor :value="markdowns" :plugins="plugins" @change="handleChange" /> -->

    <div class="view">
      <div class="content">
        <Viewer :value="markdowns" :plugins="plugins" />
      </div>
      <div class="toc">
        <div v-for="(item, index) in toc" :key="index">
          <div :href="'#' + item.slug" class="toc-item" :class="{ active: isToc === index }" @click="setToc(index)">{{
            item.title
          }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm'
import { getProcessor } from 'bytemd'
import { Editor, Viewer } from '@bytemd/vue-next'


const plugins = [
  gfm(),
  // Add more plugins here
]
const props = defineProps<{
  markdowns: string
}>()

const handleChange = (value: string) => {
  console.log(value)
}

// https://github.com/bytedance/bytemd/issues/33
let hast: any
getProcessor({
  plugins: [
    {
      rehype: (p) =>
        p.use(() => (tree: any) => {
          hast = tree
        }),
    },
  ],
}).processSync(props.markdowns);

// console.log(hast) // h1-h6 is what you want

let toc: any = []
const getToc = (hast: any) => {
  hast.children.forEach((item: any) => {
    if (item.tagName === 'h1') {
      toc.push({
        level: 1,
        title: item.children[0].value,
        slug: item.properties.id
      })
    } else if (item.tagName === 'h2') {
      toc.push({
        level: 2,
        title: item.children[0].value,
        slug: item.properties.id
      })
    } else if (item.tagName === 'h3') {
      toc.push({
        level: 3,
        title: item.children[0].value,
        slug: item.properties.id
      })
    } else if (item.tagName === 'h4') {
      toc.push({
        level: 4,
        title: item.children[0].value,
        slug: item.properties.id
      })
    } else if (item.tagName === 'h5') {
      toc.push({
        level: 5,
        title: item.children[0].value,
        slug: item.properties.id
      })
    } else if (item.tagName === 'h6') {
      toc.push({
        level: 6,
        title: item.children[0].value,
        slug: item.properties.id
      })
    }
  })
}
getToc(hast)
let isToc = ref(0)
const setToc = (index: number) => {
  isToc.value = index
}
</script>


<style lang="scss" scoped>
.view {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
  margin-top: 20px;

  .content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }

  .toc {
    position: sticky;
    top: 0px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;

    .toc-item {
      display: block;
      padding: 5px 10px;
      color: #666;
      cursor: pointer;

      &.active {
        color: #2d6fff;
      }
    }
  }
}
</style>
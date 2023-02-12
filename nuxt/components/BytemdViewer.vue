<template>
  <div>
    <div class="view">
      <div class="content">
        <Viewer :value="markdowns" :plugins="plugins" />
      </div>
      <div class="toc">
        <div v-for="(item, index) in toc" :key="index">
          <div class="toc-item"
            :style="{ marginLeft: item.level * 10 + 'px', color: isToc === index ? '#2d6fff' : '#666' }"
            @click="setToc(index)">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
// import { getProcessor } from 'bytemd'
import { Viewer } from '@bytemd/vue-next'
import { defineProps, onMounted, onBeforeMount, ref } from 'vue'


// https://github.com/xitu/juejin-markdown-themes

const plugins = [
  gfm(),
  // Add more plugins here
]
const props = defineProps<{
  markdowns: string
}>()


// 我竟然自己写了一个 toc 和滚动！！！！！
// get h1-h6
let htable: any = []
let toc: any = []
let isToc = ref(0)
onBeforeMount(() => {
  htable = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  htable.forEach((item: any, index: number) => {
    toc.push({
      level: item.tagName.slice(1),
      title: item.innerText,
      index: index
    })
  })
  console.log(toc)

})
const setToc = (index: number) => {
  isToc.value = index
  const el = htable[index]
  if (el) {
    el.scrollIntoView()
  }
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
    top: 120px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 200px;
    height: 500px;
    // 貌似是必须要有width 和 height 最上面那个 position: sticky 才能生效

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
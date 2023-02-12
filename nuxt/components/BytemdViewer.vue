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
// 如何解决数据更新后，页面不更新的问题...现在是必须刷新或者..笨蛋，用reactive包一下就ojbk的事...然后配合onMounted。啊...vue真好用。
// get h1-h6
let htable: any = []
let toc: any = reactive([])
let isToc = ref(0)

onMounted(() => {
  htable = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  htable.forEach((item: any, index: number) => {
    toc.push({
      level: item.tagName.slice(1),
      title: item.innerText,
      index: index
    })
  })
})

const setToc = (index: number) => {
  isToc.value = index
  const el = htable[index]
  if (el) {
    el.scrollIntoView(
      {
        behavior: "smooth",  // 平滑过渡
        block: "start"    // 上边框与视窗顶部平齐
      }
    )
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.view {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 20px;
  margin-top: 20px;

  .content {
    @include font_color("font_color1");
    @include background_color("background_color1");
    padding: 20px;
    border-radius: 5px;
  }

  .toc {
    position: sticky;
    top: 120px;
    @include background_color("background_color1");
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
    }
  }
}
</style>
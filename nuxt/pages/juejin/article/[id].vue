<template>
  <JuejinHeader></JuejinHeader>
  <div class="lala">
    <div class="view">
      <div class="content">
        <Viewer :value="markdowns" :plugins="plugins" />
      </div>
      <div class="toc">
        <div v-for="(item, index) in toc" :key="index">
          <div class="toc-item"
            :style="{ marginLeft: item.level * 10 + 'px', color: isToc === index ? '#2d6fff' : '#666', borderLeft: isToc === index ? '#2d6fff' : '#666' }"
            @click="setToc(index)">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import gfm from '@bytemd/plugin-gfm'
import { Viewer } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'

// https://github.com/bytedance/bytemd/issues/126

// https://github.com/xitu/juejin-markdown-themes

const plugins = [
  gfm(),
  // Add more plugins here
]
const { findOne } = useStrapi()
const route = useRoute()
const id = route.params.id as string
const re = await findOne<Article>('articles', id)
let markdowns = re.data.attributes.content
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
        block: "center"    // 上边框与视窗顶部平齐
      }
    )
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.lala {
  background-color: #eee;
}

.view {
  display: flex;
  gap: 15px;
  margin: 8rem;
  justify-content: center;


  .content {
    flex: 1;
    max-width: 780px;
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
    border: #666 1px solid;
    border-radius: 5px;
    width: 200px;
    height: 500px;
    // 貌似是必须要有width 和 height 最上面那个 position: sticky 才能生效

    .toc-item {
      display: block;
      padding: 5px 10px;
      color: #666;
      cursor: pointer;
      border-left: #666 2px solid;
    }
  }
}

@media screen and (max-width: 768px) {
  .view {
    grid-template-columns: 1fr;
  }

  .toc {
    display: none;
  }
}
</style>
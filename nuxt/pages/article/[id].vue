<template>
  <JuejinHeader></JuejinHeader>
  <div class="lala">
    <div class="view">

      <div class="content">
        <div class="content-title">
          <h1>{{ re.data.attributes.title }}</h1>
        </div>
        <div class="content-cover">
          <img :src="`http://localhost:1337${re.data.attributes.cover.data.attributes.url}`" alt="article-cover">
        </div>
        <div class="content-author-info">
          <div class="content-author-info-avatar">
            <img :src="`http://localhost:1337${re.data.attributes.author.data.attributes.avatar.data.attributes.url}`"
              alt="author-avatar">
          </div>
          <div class="content-author-info-name">
            {{ re.data.attributes.author.data.attributes.username }}
          </div>
          <div class="content-author-info-time">
            {{ re.data.attributes.createdAt }}
          </div>
        </div>
        <div class="content-main markdown-body">
          <Viewer :value="markdowns" :plugins="plugins" />
        </div>
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
// import 'bytemd/dist/index.css'
// import "github-markdown.css"

// https://github.com/bytedance/bytemd/issues/126

// https://github.com/xitu/juejin-markdown-themes

const plugins = [
  gfm(),
  // Add more plugins here
]
const { findOne } = useStrapi()
const route = useRoute()
const id = route.params.id as string
const re = await findOne<Article>('articles', id, {
  populate: {
    author: {
      populate: {
        avatar: true,
      },
    },
    cover: true,
  },
})

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


useHead({
  title: re.data.attributes.title + ' | meow 掘金',
  meta: [
    { name: 'description', content: re.data.attributes.title }
  ]
})


</script>


<style lang="scss" scoped>
@import "~/assets/css/main.scss";
@import "~/assets/css/github-markdown.css";


.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.lala {
  background-color: #eee;
}

.view {
  display: flex;

  gap: 15px;
  margin: 8rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 5rem;
  }

  .content {
    flex: 1;
    max-width: 780px;
    // @include font_color("font_color1");
    @include background_color("background_color1");
    padding: 20px;
    border-radius: 5px;

    .content-cover {
      &>img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    .content-author-info {
      display: flex;
      align-items: center;
      margin-top: 10px;

      .content-author-info-avatar {
        &>img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      .content-author-info-name {
        margin-left: 10px;
        font-size: 1.2rem;
      }

      .content-author-info-time {
        margin-left: 10px;
        font-size: 1rem;
        color: #666;
      }
    }
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
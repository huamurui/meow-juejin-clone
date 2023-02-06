<template>
  <div>
    <div class="article-list">
      <div class="article-pre" v-for="(item, index) in articles">

        <div class="article-info">
          <div class="article-author">
            <img src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b~300x300.image"
              alt="">
            <span>小胡子哥</span>
          </div>
          <div class="article-time">
            2021-02-01
          </div>
        </div>

        <div class="article-content">
          <div class="article-title">
            <a>{{ item.title }}</a>
          </div>
          <div class="article-desc">
            {{ item.desc }}
          </div>
          <div v-if="item.img != null" class="article-img">
            <img :src="item.img" alt="">
          </div>
        </div>

        <div class="article-operation">
          <div class="article-like">
            <span class="iconfont icon-like"></span>
            <span>喜欢</span>
          </div>
          <div class="article-comment">
            <span class="iconfont icon-comment"></span>
            <span>评论</span>
          </div>
          <div class="article-share">
            <span class="iconfont icon-share"></span>
            <span>分享</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let articles = [
  {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  },
  {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }, {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }, {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  },
  {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }, {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }, {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  },
  {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }, {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }, {
    title: "前端开发者必备的 10 个 VSCode 插件",
    desc: "VSCode 是前端开发者的必备神器，它的插件市场也是前端开发者的福音。在这里，我们将为大家推荐 10 个必备的 VSCode 插件，希望能够帮助到大家。",
  }
]
</script>

<style scoped>
.article-pre {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.article-info {
  display: flex;
  justify-content: space-between;
}

.article-operation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.article-title {
  font-size: 16px;
  font-weight: 800;
  color: #333;
  margin-bottom: 10px;
}

.article-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>
<template>
  <div>
    <div class="select">
      <div class="category">
        <div v-for="(item, index) in res0.data">
          <a class="category-item" :class="{ active: isCategory === index }" @click="setCategory(index)">{{
            item.attributes.categoryName
          }}</a>
        </div>
      </div>
      <div class="tag">
        <div v-for="(item, index) in res1.data">
          <a class="tag-item" :class="{ active: isTag === index }" @click="setTag(index)">{{
            item.attributes.tagName
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


const { find } = useStrapi()
const res0 = await find<Category>('categories')
const res1 = await find<Tag>('tags')
// tag 和 category 要有关联...但我没写呢。而且是监听点击时事件去做关联查询...还有相关的文章查询...这个可能写不了了

// 还有一件事，我突然在想...SEO 做得好还可以把查询这一项任务直接交给浏览器，减轻自己服务器的压力。这样也太机智了。

let isCategory = ref(0)
const setCategory = (index: number) => {
  isCategory.value = index
}
let isTag = ref(0)
const setTag = (index: number) => {
  isTag.value = index
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.select {
  margin-top: 60px;

  .category {
    display: flex;
    white-space: nowrap;
    flex-shrink: 0;
    overflow: auto;
    padding: 0 20px;
    @include background_color("background_color1");

    .category-item {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px;
      @include font_color("font_color2");

      cursor: pointer;

      &:hover {
        @include font_color("font_color1");
      }

      &.active {
        font-weight: 600;
        @include font_color("theme_color");
      }
    }
  }

  .tag {
    @include background_color("background_color2");
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;

    .tag-item {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px;
      color: #666;
      @include background_color("background_color1");
      border: #666;
      border-radius: 99999px;
      cursor: pointer;

      &:hover {
        color: #333;
      }

      &.active {
        @include font_color("font_color1");
        @include background_color("theme_color");
      }
    }
  }
}
</style>
<template>
  <div>
    <div class="select">
      <div class="category">
        <div v-for="(item, index) in categories" :key="index">
          <a class="category-item" :class="{ active: isCategory === index }" @click="setCategory(index)">{{ item }}</a>
        </div>
      </div>
      <div class="tag">
        <div v-for="(item, index) in tags" :key="index">
          <a class="tag-item" :class="{ active: isTag === index }" @click="setTag(index)">{{ item }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let categories = [
  "前端",
  "后端",
  "Android",
  "iOS",
  "人工智能",
  "设计",
  "产品"
]
let isCategory = ref(0)
const setCategory = (index: number) => {
  isCategory.value = index
}

let tags = [
  "java",
  "javascript",
  "python",
  "vue",
  "react",
  "nodejs",
]

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
    flex-wrap: wrap;
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
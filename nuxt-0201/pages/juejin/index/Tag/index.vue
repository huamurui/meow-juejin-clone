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

<style scoped>
.select {
  margin-top: 60px;
}

.category {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
}

.category-item {
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  color: #666;
  cursor: pointer;
}

.category-item:hover {
  color: #333;
}

.category-item.active {
  color: #334bff;
}

.tag {
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
}

.tag-item {
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  color: #666;
  background-color: #fff;
  border: #666;
  border-radius: 99999px;
  cursor: pointer;
}

.tag-item:hover {
  color: #333;
}

.tag-item.active {
  color: #fff;
  background-color: #4e89ff;
}
</style>
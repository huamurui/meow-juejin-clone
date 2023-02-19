<template>
  <div>

    <div class="tag">
      <div class="container">
        <div class="tag-item" v-for="(tag, index) in tags">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

let tags = [
  '前端',
  '后端',
  'Android',
  'iOS',
  '人工智能',
  '设计',
  '产品',
]
</script>

<style lang="scss" scoped>
.tag {
  margin-top: 60px;
  border-top: #f5f5f5 1px solid;
  height: 40px;
  overflow: auto;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;

    .tag-item {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      height: 100%;

      margin-left: 20px;
      font-size: 14px;
      color: #333;
      cursor: pointer;

      &:hover {
        color: #007fff;
      }
    }
  }
}
</style>
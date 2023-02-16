<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">
          <img src="/juejin.svg" alt="掘金" />
        </div>
        <div class="nav">
          <div class="nav-item" v-for="(nav, index) in navs">
            {{ nav }}
          </div>
        </div>
      </div>
    </header>

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

// const { find }= useStrapi()
// const nav = await find('navs')
let navs = [
  '首页',
  '沸点',
  '小册',
  '标签',
  '专栏',
  '活动',
]

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
header {
  .container {
    display: flex;
    align-items: center;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .nav {
      display: flex;
      align-items: center;
      height: 100%;

      .nav-item {
        display: flex;
        align-items: center;
        height: 100%;

        margin-left: 20px;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        border-bottom: 2px solid transparent;

        &:hover {
          color: #007fff;
          border-bottom: 2px solid #007fff;
        }
      }

    }
  }
}

.tag {
  border-top: #f5f5f5 1px solid;
  height: 40px;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;

    .tag-item {
      display: flex;
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
<template>
  <header class="header">
    <div class="nav">

      <a class="logo" href="https://juejin.cn">
        <img src="../../../../assets/img/juejin.svg" alt="掘金" />
      </a>

      <div class="collapse-menu">
        <a @click="showNavs">首页 ↓</a>
        <div class="floating-menu">
          <div v-show="show" v-for="(item, index) in menuItems" :key="index">
            <a class="floating-menu-item">{{ item }}</a>
          </div>
        </div>

      </div>

      <div class="expand-menu">
        <div v-for="(item, index) in menuItems" :key="index">
          <a class="menu-item" :class="{ active: isActive === index }" @click="setActive(index)">{{ item }}</a>
        </div>
      </div>

    </div>

    <div class="search">
      <input type="text" placeholder="搜索掘金" />
    </div>

    <div class="user">
      <div class="post">
        <NuxtLink to="/juejin">写文章</NuxtLink>
      </div>
      <div class="notice">
        <NuxtLink to="/juejin">通知</NuxtLink>
      </div>
      <div class="personal">
        <NuxtLink to="/juejin">用户</NuxtLink>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
let menuItems = [
  "首页",
  "沸点",
  "小册",
  "标签",
  "收藏集",
  "活动",
]
let isActive = ref(0)
const setActive = (index: number) => {
  isActive.value = index
}

let show = ref(false)

let showNavs = () => {
  show.value = !show.value
}

</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #ffffff;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  max-width: 1440px;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-left: 20px;
}

.logo {
  margin-right: 1rem;
  margin-left: 24px;
  display: inline-block;
  height: 22px;
  width: auto;
  cursor: pointer;
}

.collapse-menu {
  display: none;
}

.expand-menu {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-left: 20px;
}

@media screen and (max-width: 768px) {
  .expand-menu {
    display: none;
  }

  .collapse-menu {
    display: flex;
  }

  .floating-menu {
    display: flex;
    flex-direction: row;
    transform: translateY(50%);
    top: 60px;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    z-index: 1;
  }

  .floating-menu-item {
    height: 40px;
    line-height: 40px;
    color: rgb(42, 42, 42);
  }


  .menu-item {
    display: block;
  }
}

.menu-item {
  display: flex;
  align-items: center;
  color: rgb(42, 42, 42);
  height: 60px;
  margin-right: 20px;
}

.menu-item:hover {
  color: rgb(0, 47, 157);
  border-bottom: 2px solid rgb(42, 42, 42);
  cursor: pointer;
}

.active {
  color: rgb(0, 76, 255);
}

.search {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 20px;
}

.search input {
  width: 85%;
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 0 10px;
}

.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post,
.notice,
.personal {
  margin-left: 20px;
}
</style>
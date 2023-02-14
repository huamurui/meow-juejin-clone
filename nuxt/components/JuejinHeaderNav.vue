<template>
  <div>
    <div class="nav">

      <NuxtLink :to="`/juejin`" class="logo">
        <img src="/juejin.svg" alt="掘金" />
      </NuxtLink>

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
  </div>
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

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.nav {
  .logo {
    margin-right: 1rem;
    margin-left: 24px;
    display: inline-block;
    height: 22px;
    width: auto;
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-left: 20px;
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

  .active {
    @include font_color("theme_color");
    font-weight: 1000;
  }
}


.menu-item {
  display: flex;
  align-items: center;
  @include font_color("font_color2");
  height: 60px;
  margin-right: 20px;

  &:hover {
    @include font_color("theme_color");
    border-bottom: 3px solid rgb(42, 42, 42);
    @include border_color("theme_color");
    cursor: pointer;
    translate: 0 3px;
  }
}

@media screen and (max-width: 950px) {
  .expand-menu {
    display: none;
  }


  /* v-show 也会用到 input 框吗？...这反正样写，不得行 */
  /* input {
    display: none;
  } */

  .search {
    display: none;

    input {
      display: none;
    }
  }

  .collapse-menu {
    @include font_color("font_color1");
    display: flex;
    flex-shrink: 0;
  }

  .floating-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    @include background_color("background_color1");
    border-radius: 4px;
    width: 110px;
    z-index: 1;
  }

  .floating-menu-item {
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    height: 40px;
    line-height: 40px;
    @include font_color("font_color1");
  }


  .menu-item {
    display: block;
  }
}
</style>
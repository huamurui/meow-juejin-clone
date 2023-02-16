<template>
  <div>
    <div class="nav">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z"
          fill="#1E80FF" />
      </svg>
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
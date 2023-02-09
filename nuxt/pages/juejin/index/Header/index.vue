<template>
  <header class="header">
    <div class="nav">

      <a class="logo" href="https://juejin.cn">
        <img src="/juejin.svg" alt="掘金" />
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
        <div class="post-button" to="/juejin">
          创作者中心
        </div>
        <!-- <div class="post-icon" to="/juejin">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="active unfold12-icon" data-v-014d2bb2="">
            <path
              d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"
              fill="white" data-v-014d2bb2=""></path>
          </svg>
        </div> -->
      </div>
      <div class="notice">
        <NuxtLink to="/juejin">
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">

            <title>notice-active</title>
            <desc>Created with sketchtool.</desc>
            <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="notice-active" fill="#000000">
                <path
                  d="M15.0846417,4.85258583 C15.3698859,3.78571001 16.3431867,3 17.5,3 C18.8807119,3 20,4.11928813 20,5.5 C20,6.82802369 18.9645064,7.9141949 17.6568748,7.99515796 C17.8790698,8.62208363 18,9.29691944 18,10 L18,16 L19,16 C19.5499992,16 20,16.4500008 20,17 C20,17.5499992 19.5499992,18 19,18 L15,18 L15,19 C15,20.6568542 13.6568542,22 12,22 C10.3431458,22 9,20.6568542 9,19 L9,18 L5,18 C4.44999981,18 4,17.5499992 4,17 C4,16.4500008 4.44999981,16 5,16 L6,16 L6,10 C6,7.02700371 8.16228666,4.55903653 11,4.08295844 L11,3 C11,2.44771525 11.4477153,2 12,2 C12.5522847,2 13,2.44771525 13,3 L13,4.08295844 C13.7514465,4.20902728 14.4555302,4.47477291 15.0846417,4.85258583 Z M12,20 C12.5522847,20 13,19.5522847 13,19 C13,18.7251922 13,18.3918589 13,18 L11,18 C11,18.470365 11,18.8036984 11,19 C11,19.5522847 11.4477153,20 12,20 Z M8,16 L16,16 L16,10 C16,7.790861 14.209139,6 12,6 C9.790861,6 8,7.790861 8,10 L8,16 Z"
                  id="Shape"></path>
              </g>
            </g>
          </svg>
        </NuxtLink>
      </div>
      <div class="personal">
        <NuxtLink to="/juejin">
          <img class="personal-img" scr="../../../../assets/img/juejin.svg" />
        </NuxtLink>
      </div>
      <div class="dark-mode">
        <a @click="useChangeTheme()">
          <div v-show="!circle.value">
            <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5c-3.051 0-5.5 2.449-5.5 5.5s2.449 5.5 5.5 5.5c3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z" />
            </svg>
          </div>
          <div v-show="circle.value">
            <svg width="24px" height="24px" viewBox="-80 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
            </svg>
          </div>
        </a>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import { useChangeTheme, circle } from "~/composables/useChangeTheme"

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

.header {
  position: fixed;
  top: 0;
  @include background_color("background_color1");

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  max-width: 1440px;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;

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
    }
  }


  .search {
    display: flex;
    align-items: center;
    width: 30vw;
    height: 100%;
    margin-right: 20px;


    input {
      @include background_color("background_color2");
      @include font_color("font_color1");

      width: 85%;
      height: 40px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      padding: 0 10px;
    }
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;

    .post {
      .post-button {
        height: 40px;
        line-height: 40px;
        width: 100px;
        text-align: center;
        @include background_color("theme_color");
        border-radius: 4px;
        color: #e6e6e6;
      }
    }

    .notice,
    .personal {
      margin-left: 20px;

      .personal-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1;
      }
    }

    .dark-mode {
      background-color: #e6e6e6;
    }

  }


  @media screen and (max-width: 768px) {
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
}
</style>
<template>
  <div>
    <header>
      <div class="container">
        <NuxtLink :to="`/juejin`" class="logo">
          <!-- https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images -->
          <picture>
            <source media="(max-width: 799px)" srcset="/juejin-small.svg" />
            <source media="(min-width: 800px)" srcset="/juejin.svg" />
            <img src="/juejin.svg" alt="掘金-图标" />
          </picture>
        </NuxtLink>
        <div class="nav">
          <div class="nav-item" v-for="(nav, index) in navs">
            {{ nav }}
          </div>
        </div>
        <div class="nav-small">
          <div class="nav-index-small" @click="show()">
            {{ navs[0] }}
            <div class="nav-index-icon">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg"
                class="active unfold16-icon" data-v-96dfbeac="">
                <path
                  d="M2.45025 4.82431C2.17422 4.49957 2.40501 4.00049 2.83122 4.00049H9.16878C9.59498 4.00049 9.82578 4.49957 9.54975 4.82431L6.38097 8.55229C6.1813 8.78719 5.8187 8.78719 5.61903 8.55229L2.45025 4.82431Z"
                  data-v-96dfbeac=""></path>
              </svg>
            </div>
          </div>
          <div class="nav-list-small" v-show="ishow">
            <div class="nav-item-small" v-for="(nav, index) in navs">
              {{ nav }}
            </div>
          </div>

        </div>
        <ClientOnly>
          <div class="theme-toggle" @click="changeT(), useChangeTheme()">
            <div v-show="isdark">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon dark-icon" viewBox="0 0 1024 1024" fill="pink"
                aria-label="dark icon" style="display: block;">
                <path
                  d="M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z">
                </path>
              </svg>
            </div>
            <div v-show="!isdark">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon light-icon" viewBox="0 0 1024 1024" fill="skyblue"
                aria-label="light icon" style="display: block;">
                <path
                  d="M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z">
                </path>
              </svg>
            </div>
          </div>
        </ClientOnly>
      </div>
    </header>

  </div>
</template>

<script setup lang="ts">

// const { find }= useStrapi()

import { onMounted } from 'vue';

// const nav = await find('navs')
let isdark = ref(false)
const changeT = () => {
  isdark.value = !isdark.value
}

let ishow = ref(false)
const show = () => {
  ishow.value = !ishow.value
}
let navs = [
  '首页',
  '沸点',
  '小册',
  '标签',
  '专栏',
  '活动',
]

</script>

<style lang="scss" scoped>
@import "~/assets/css/handle";

.theme-toggle {
  position: absolute;
  right: 20px;
  top: 30px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  cursor: pointer;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  @include background_color("background_color1");

  .container {
    display: flex;
    align-items: center;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .nav-small {
      display: none;

      @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 20px;
        flex: 1;

        .nav-index-small {
          display: flex;
          align-items: center;
          height: 100%;
          font-size: 16px;
          color: #333;
          cursor: pointer;
          border-bottom: 2px solid transparent;

          &:hover {
            color: #007fff;
            border-bottom: 2px solid #007fff;

            .nav-index-icon {
              rotate: 180deg;
              color: #007fff;
              transition: all 0.3s ease-in-out;
            }
          }
        }

        .nav-list-small {
          display: flex;
          position: absolute;
          top: 60px;
          left: 150px;
          width: 100px;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          border-radius: 4px;
          box-shadow: inset 0 0 0 1px #e6e6e6;

          .nav-item-small {
            display: flex;
            align-items: center;
            font-size: 16px;
            height: 50px;
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

    .nav {
      display: flex;
      align-items: center;
      height: 100%;

      @media screen and (max-width: 768px) {
        display: none;
      }

      .nav-item {
        display: flex;
        flex-shrink: 0;
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
</style>
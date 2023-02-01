<template>
  <div class="page__main" ref="listWrap">
    <juejin-header :msg="true" />
    <!-- 文章列表 -->
    <div class="page__main__contents">
      <!-- 文章列表主体 -->
      <div class="contents__list" ref="scrollBar">
        <div class="list__header">
          <div class="nav__list">
            <ul>
              <li><a href="" style="color: #1e80ff;">推荐</a></li>
              <li><a href="">最新</a></li>
              <li><a href="">热榜</a></li>
            </ul>
          </div>
        </div>
        <div class="list__content">
          <ul class="article__list" ref="list">
            <li v-for="article in showList" :key="article.articleId" class="list__item">
              <router-link target="_blank" :to="`/detail/${article.articleId}`" class="title">
                <div class="entry" @click="article.color = !article.color">
                  <div class="article__inform">
                    <div class="nav__list">
                      <ul>
                        <li><a href="">{{ article.userName }}</a></li>
                        <li><a href="">{{ article.mtime }}</a></li>
                        <li class="tag__a">
                          <div class="tag__name" v-for="(tag, index) in article.tagNames" :key="index">
                            <a href="">{{ tag }}</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="article__content">
                    <div class="content-main">
                      <div class="title" :class="{ titleColor: article.color }"> {{ article.title }}
                      </div>
                      <div class="abstract">
                        <div>{{ article.briefContent }}</div>
                      </div>
                      <ul class="action-list">
                        <li class="item">
                          <i class="eye"></i>
                          <span>{{ article.viewCount }}</span>
                        </li>
                        <li class="item">
                          <i class="zan"></i>
                          <span>{{ article.diggCount }}</span>
                        </li>
                        <li class="item">
                          <i class="cloud"></i>
                          <span>{{ article.commentCount }}</span>
                        </li>
                      </ul>
                    </div>
                    <div class="content-img" v-if="article.coverImage">
                      <img :src="article.coverImage" alt="" class="lazy">
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右侧信息栏 -->
      <div class="sidebar">
        <!-- 签到信息 -->
        <div class="signin__top">
          <div class="first__line">
            <div class="icon__text">
              <img src="../assets/img/day.png" alt="">
              <!-- {{ showTimeStage }} -->
            </div>
            <button class="signedin__btn">
              已签到
            </button>
          </div>
          <div class="second__line">
            你已经连续签到<span style="color:#1e80ff; font-size: 16px;">100</span>天
          </div>
        </div>
        <!-- 广告 -->
        <div class="sidebar__block">
          <img
            src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b6a58397c77485495a051142f1d863d~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
            alt="">
        </div>
        <!-- 广告 -->
        <div class="sidebar__block">
          <img
            src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a88a1ea956734105a5b002dfb48840cb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
            alt="">
        </div>
        <!-- 掘金官网链接 -->
        <div class="block-body">
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="">
          <div class="block-body-text">
            <div>下载稀土掘金APP</div>
            <div>一个帮助开发者成长的社区</div>
          </div>
        </div>
        <!-- 作者榜 -->
        <div class="user-body user-top">
          <div class="header-block">🎖️作者榜</div>
          <div class="user-list">
            <div class="item">
              <div class="item__img-box">
                <img src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3792/5112637127~300x300.image" alt="">
              </div>
              <div class="item__user-info">
                小明同学
                <img src="../assets/img/lv-2.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="item__img-box">
                <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image" alt="">
              </div>
              <div class="item__user-info">
                工匠若水
                <img src="../assets/img/lv-2.png" alt="">
              </div>
            </div>
            <div class="item">
              <div class="item__img-box">
                <img src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image" alt="">
              </div>
              <div class="item__user-info">
                固体物质搬运工
                <img src="../assets/img/lv-2.png" alt="">
              </div>
            </div>
          </div>
          <div class="author-list">
            完整榜单&nbsp;&nbsp;>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let showList: any = []

</script>

<style scoped>
:root {
  --juejin-brand-1-normal: #1e80ff;
  --juejin-brand-2-hover: #1171ee;
  --juejin-brand-3-click: #0060dd;
  --juejin-brand-4-disable: #abcdff;
  --juejin-brand-5-light: #eaf2ff;
  --juejin-font-1: #252933;
  --juejin-font-2: #515767;
  --juejin-font-3: #8a919f;
  --juejin-font-4: #c2c8d1;
}

* {
  margin: 0;
  padding: 0;
}


.listSkeleton {
  padding: 30px 20px;
  box-sizing: border-box;
  background: #fff;
}

.router-link-exact-active {
  color: #86909c;
}

.suspended {
  width: 240px;
  position: fixed;
  top: 130px;
  transition: all .3s linear;
}

.suspended>div {
  margin-bottom: 20px;
}




.page__main {
  width: 98.93vw;
}

.page__main__contents {
  /* position: absolute; */
  width: 960px;
  margin: 0 auto;
  /* background: rgba(50, 241, 16, 0.215); */
  margin-top: 130px;
  position: relative;
}

.contents__list {
  width: 700px;
  /* height: 100%; */
  /* background: rgba(17, 0, 255, 0.142); */
  margin-right: 260px;
}

.list__header {
  width: 676px;
  /* height: 47px; */
  background: #fff;
  padding: 17px 12px;
  position: relative;
}

.list__content {
  width: 100%;
  /* height: 100vh;
    overflow: scroll; */
  background: #fff;
}

.article__list {
  width: 100%;
}

.list__item {
  /* width: 660px;
    height: 129px; */
  padding: 12px 20px 0 20px;
  position: relative;
}

.list__item:hover {
  background: #fafafa;
}

.list__header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--juejin-font-4);
  transform: scaleY(.5);
}

.list__item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 21px;
  width: 94%;
  height: 1px;
  background: var(--juejin-font-4);
  transform: scaleY(.5);
}

/* 内容头部标签 */
.nav__list {
  display: flex;
  height: 19px;
}

.nav__list>ul {
  display: flex;
}

.nav__list li {
  font-size: .9rem;
  margin: 0 13px;
  position: relative;
}

.nav__list li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: -13px;
  top: -5px;
  width: 1px;
  height: 155%;
  background: var(--juejin-font-4);
  transform: scaleY(.5);
}

.tag__a {
  display: flex;
}

.tag__name {
  position: relative;
  margin-right: 16px;
}

.tag__name:not(:last-child)::after {
  content: '·';
  position: absolute;
  right: -8px;
  top: 0px;
  transform: scale(2);
  color: #4e59699a;
}

.nav__list a:hover {
  color: var(--juejin-brand-1-normal);
}


/* 文章列表 */
.list__item>.entry {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin: 5px 0;
}

.article__inform {
  width: 100%;
  height: 22px;
  display: flex;
}

.article__content {
  width: 100%;
  height: 97px;
  display: flex;
}

.article__inform>.nav__list li {
  font-size: .7rem;
}

.article__inform>.nav__list li:nth-child(1) {
  margin-left: 0;
}

.content-main {
  width: 200px;
  flex: 1 0 auto;
}

.content-main .title {
  font-size: .98rem;

  font-weight: bold;
  margin: 8px 0 12px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.titleColor {
  color: #000;
}

.content-main .abstract {
  /* width: 100px; */
  font-size: .82rem;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  /* -webkit-line-clamp: 1 */
  overflow: hidden;
  white-space: nowrap;
}

.action-list {
  display: flex;
  font-size: 0.8em;
  color: var(--juejin-font-2);

}

.action-list .item {
  display: inline-block;
  margin-right: 20px;
  display: flex;
}

.action-list>li>i {
  display: block;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  margin-right: 4px;
}

.action-list .eye {
  background-image: url("../img/eye.png");
}

.action-list .zan {
  background-image: url("../img/zan__off.png");
}

.action-list .cloud {
  margin-top: 2px;
  background-image: url("../img/cloud__off.png");
}

.action-list .zan:hover {
  background-image: url("../img/zan__on.png");
}

.action-list .cloud:hover {
  /* margin-top: 2px; */
  background-image: url("../img/cloud__on.png");
}

.content-img {
  width: 120px;
  height: 80px;
  margin-left: 24px;
  flex: 0 0 auto;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.article__content img {
  display: block;
  /* transform: translate(0,-50%); */
  width: 120px;
  /* height: 160px; */
  /* margin-left: 24px;
    flex: 0 0 auto; */
  border-radius: 2px;
  transform: scale(1.2);
}

.sidebar {
  width: 240px;
  position: absolute;
  top: 0;
  right: 0;
}

.sidebar>div {
  margin-bottom: 16px;
  border-radius: 3px;
}

.signin__top {
  width: 100%;
  height: 96px;
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.first__line {
  display: flex;
  justify-content: space-between;

}

.icon__text {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
}

.icon__text>img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.signedin__btn {
  width: 72px;
  height: 32px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  color: #1e80ff;
  background: #e8f3ff;

}

.second__line {
  font-size: 14px;
  display: flex;
  justify-content: center;
  color: #86909c;
}



.sidebar__block {
  width: 100%;
  /* height: 200px; */
  overflow: hidden;
  position: relative;
  background: #fff;
}

.sidebar__block>img {
  width: 100%;
}

.sidebar__block:not(:last-child)::after {
  content: '广告';
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 36px;
  height: 19px;
  background: rgba(0, 0, 0, 0.151);
  border: 1px solid rgb(199, 199, 199);
  border-radius: 3px;

  font-size: 8px;
  color: #fff;
  text-align: center;
  line-height: 19px;
}

.block-body {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
}

.block-body>img {
  width: 50px;
  height: 50px;
  margin-right: 12px;
}

.block-body-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.block-body-text>:first-child {
  font-size: 14px;
}

.block-body-text>:last-child {
  font-size: 12px;
  line-height: 20px;
  color: #86909c;
}

.header-block {
  padding: 12px 15.6px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333333;
}

.author-list {
  font-size: 14px;
  color: #007fff;
  text-align: center;
  padding: 12px 0;
}

.user-top>div {
  position: relative;
}

.user-top>div:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e8f3ff;
}

.user-list>.item {
  padding: 12px 15.6px;
  box-sizing: border-box;
  display: flex;
}

.item__img-box {
  width: 45.6px;
  height: 45.6px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.item__img-box>img {
  width: 100%;
}

.item__user-info {
  height: 100%;
  font-size: 14px;
  color: #333333;
  line-height: 45.6px;
  display: flex;
  align-items: center;
}

.item__user-info>img {
  width: 35px;
  height: 16px;
  margin-left: 6px;
}

.user-body {
  background: #fff;
}
</style>
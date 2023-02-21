<template>
  <div>
    <main>
      <div class="content">
        <div class="content-item" v-for="(article, index) in articles" :key="index">
          <NuxtLink :to="`/article/${article.id}`" class="content-main">
            <div class="item-info">
              {{ article.attributes.author.data.attributes.username }} 发布于
              {{ article.attributes.createdAt }}
            </div>
            <div class="item-pre">
              <div class="item-title">
                {{ article.attributes.title }}
              </div>
              <div class="item-desc">
                {{ article.attributes.content }}
              </div>
            </div>
            <div class="item-footer">
              <div class="action-bar">
                <div class="action-view">view</div>
                <div class="action-good">good</div>
                <div class="action-talk">talk</div>
              </div>
            </div>
          </NuxtLink>
          <div v-if="article.attributes.cover.data != null" class="article-cover">
            <img :src="`${useRuntimeConfig().apiBase}${article.attributes.cover.data.attributes.url}`" alt="">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  articles: any;
}>();

</script>

<style lang="scss" scoped>
@import "~/assets/css/handle";

main {
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;


    .content-item {
      display: flex;

      padding: 20px;
      border-bottom: 1px solid #eee;
      @include border_color("border_color1");
      border-radius: 2px;

      .content-main {
        flex: 1;

        .item-info {
          font-size: 14px;
          font-weight: 200;
          @include font_color("font_color2");
          margin-bottom: 10px;
        }

        .item-pre {
          font-size: 16px;
          @include font_color("font_color2");
          margin-bottom: 10px;

          .item-title {
            font-weight: 800;
            font-size: 1rem;
            @include font_color("font_color1");
            margin-bottom: 10px;
          }

          .item-desc {
            font-size: 14px;
            color: #999;
            @include ellipsis(2)
          }
        }

        .item-footer {

          .action-bar {
            display: flex;
            align-items: center;
            margin-top: 10px;

            &>div {
              margin-right: 20px;
              font-size: 14px;
              @include font_color("font_color2");
            }
          }
        }
      }

      .article-cover {
        // @media screen and (max-width: 768px) {
        //   margin-left: 10px;

        //   &>img {
        //     width: 100px;
        //     height: 60px;
        //   }

        // }
        @media screen and (max-width: 460px) {
          display: none;

        }

        margin-left: 20px;

        &>img {
          width: 120px;
          height: 80px;
        }
      }
    }
  }
}
</style>
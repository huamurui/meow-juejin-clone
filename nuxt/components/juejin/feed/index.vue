<template>
  <div>
    <main>
      <div class="content">
        <div class="content-item" v-for="(article, index) in articles">

          <div class="item-info">
            {{ article.author.attributes.username }}
          </div>
          <div class="item-pre">
            {{ article.attributes.content }}
          </div>
          <div class="item-footer">
            {{ article.attributes.createdAt }}
          </div>

          <div v-if="article.attributes.cover.data != null" class="article-cover">
            <img style="width: 200px; height: 100px;"
              :src="`http://localhost:1337${article.attributes.cover.data.attributes.url}`" alt="">
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
main {


  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;


    .content-item {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;

      .item-info {
        font-size: 20px;
        font-weight: 600;
        color: #333;
        margin-bottom: 10px;
      }

      .item-pre {
        font-size: 16px;
        color: #666;
        margin-bottom: 10px;
      }

      .item-footer {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
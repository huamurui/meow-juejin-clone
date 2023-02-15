<template>
  <div>
    <div class="article-list">
      <div v-for="(article, index) in articles" :key="index">
        <NuxtLink :to="`/juejin/article/${article.id}`">
          <div class="article-pre">
            <div class="article-info">
              <div class="article-author">
                <span>{{ article.attributes.author.data.attributes.username }}</span>
              </div>
              <div class="article-time">
                {{ article.attributes.createdAt }}
              </div>
            </div>

            <div class="article-main">
              <div class="article-content">
                <div class="article-title">
                  <a>{{ article.attributes.title }}</a>
                </div>
                <div class="article-desc">
                  {{ article.attributes.content }}
                </div>
              </div>

              <div v-if="article.attributes.cover.data != null" class="article-cover">
                <img style="width: 200px; height: 100px;"
                  :src="`http://localhost:1337${article.attributes.cover.data.attributes.url}`" alt="">
              </div>
            </div>

            <div class="article-operation">
              <div class="article-view">
                <i>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#000" stroke-width="2"
                      d="M12,17 C9.27272727,17 6,14.2222222 6,12 C6,9.77777778 9.27272727,7 12,7 C14.7272727,7 18,9.77777778 18,12 C18,14.2222222 14.7272727,17 12,17 Z M11,12 C11,12.55225 11.44775,13 12,13 C12.55225,13 13,12.55225 13,12 C13,11.44775 12.55225,11 12,11 C11.44775,11 11,11.44775 11,12 Z" />
                  </svg>
                </i>
                <span>100</span>
              </div>
              <div class="article-support">
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="supportiTitle" stroke="#000000" stroke-width="1" stroke-linecap="square"
                  stroke-linejoin="miter" fill="none" color="#000000">
                  <title id="supportiTitle">Support</title>
                  <path stroke-linecap="round"
                    d="M11 8L9.42229 7.21115C9.14458 7.07229 8.83835 7 8.52786 7H7.82843C7.29799 7 6.78929 7.21071 6.41421 7.58579L5.58579 8.41421C5.21071 8.78929 5 9.29799 5 9.82843L5 14.9296C5 15.5983 5.3342 16.2228 5.8906 16.5937L9.75746 19.1716C10.4944 19.663 11.4668 19.611 12.1472 19.044L17 15" />
                  <path
                    d="M14.4549 12.9142C13.8515 12.1062 12.741 11.8739 11.8643 12.3721L10.009 13.4266C9.41298 13.7653 8.66412 13.6641 8.17937 13.1794V13.1794C7.54605 12.546 7.59324 11.5056 8.2813 10.9323L12.4437 7.46356C12.8032 7.16403 13.2562 7 13.7241 7H14.5279C14.8384 7 15.1446 7.07229 15.4223 7.21115L17.8944 8.44721C18.572 8.786 19 9.47852 19 10.2361L19 12.9796C19 14.9037 16.5489 15.718 15.3976 14.1764L14.4549 12.9142Z" />
                  <path d="M1 17V8" />
                  <path d="M1 17V8" />
                  <path d="M23 17V8" />
                </svg>
                <span>100</span>
              </div>
              <div class="article-comment">
                <svg width="24px" height="24px" viewBox="0 -0.08 20 20" data-name="Capa 1" id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.93,5.92l-7.79,0h0A1.25,1.25,0,0,0,4.91,7.09l0,8.5a.38.38,0,0,0,.23.35.4.4,0,0,0,.15,0,.35.35,0,0,0,.26-.12c.7-.71,1.93-1.72,2.46-1.72H8l5.92,0h0A1.23,1.23,0,0,0,15.1,13l0-5.8A1.23,1.23,0,0,0,13.93,5.92Zm.42,7a.47.47,0,0,1-.14.33.59.59,0,0,1-.33.14L8,13.38c-.71,0-1.69.75-2.34,1.33l0-7.62a.47.47,0,0,1,.47-.47h0l7.78,0a.44.44,0,0,1,.33.14.48.48,0,0,1,.14.34Z" />
                </svg>
                <span>200</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  articles: any;
}>();
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.article-list {
  display: grid;
}

.article-pre {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  align-self: center;
  box-sizing: border-box;
  border-radius: 10px;
  @include background_color("background_color1");
  box-shadow: 0 0 10px 0 rgba(128, 128, 128, 0.1);

  .article-info {
    @include font_color("font_color2");
    display: flex;
    justify-content: space-between;
  }

  .article-main {
    display: flex;
    flex-direction: row;

    .article-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 20px;

      .article-title {
        @include font_color("font_color2");
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .article-desc {
        @include font_color("font_color2");
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        @include ellipsis(2);
      }


    }

    .article-cover {
      margin-top: 20px;
      border-radius: 10px;
    }
  }

  .article-operation {
    @include font_color("font_color2");
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}
</style>
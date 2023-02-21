<template>
  <div>
    <aside>
      <div class="aside">
        <div class="adv" v-for="(ad, index) in ads">
          <NuxtLink :to="`${ad.attributes.link}`" class="adv-cover">
            <img :src="`${config.apiBase}${ad.attributes.cover.data.attributes.url}`" alt="ads">
          </NuxtLink>
        </div>
        <div class="qr-code">
          <div class="app-link">
            <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" class="qr-img"
              alt="qr-img">
            <div class="content-box">
              <div class="headline">下载稀土掘金APP</div>
              <div class="desc">一个帮助开发者成长的社区</div>
            </div>
          </div>
        </div>
        <div class="ranking">
          <div class="ranking-info">
            <header>作者榜</header>
            <div class="ranking-item" v-for="(author, index) in authors" :key="index">
              <div class="author-avatar">
                <img :src="`${config.apiBase}${author.avatar.url}`" alt="avatar" />
              </div>
              <div class="author-name">
                {{ author.username }}
              </div>
              <div class="author-info">
                {{ author.email }}
              </div>

            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()


const { find } = useStrapi()

const re = await find<Ad>('ads', {
  populate: ['cover'],
})
const ads = re.data


const re2 = await find<Person>('users', {
  populate: ['avatar'],
})

const authors = re2

</script>

<style lang="scss" scoped>
@import "~/assets/css/handle";

.aside {
  width: 240px;
  display: flex;
  flex-direction: column;
  @include background_color("background_color2");
  gap: 1rem;


  .adv {
    // position: sticky;
    display: flex;
    width: 100%;

    .adv-cover {
      width: 100%;
      height: 200px;

      &>img {
        width: 100%;
        height: 100%;
      }
    }

    .adv-info {
      width: 100%;
      height: 80px;
    }

  }

  .qr-code {
    width: 100%;
    height: 74px;
    display: flex;
    @include background_color("background_color1");

    .app-link {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .qr-img {
        margin: 10px;
        width: 50px;
        height: 50px;
      }

      .content-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .headline {
          margin: 5px;
          font-size: 1rem;
          font-weight: 300;
        }

        .desc {
          margin: 5px;
          font-size: 0.8rem;
          @include font_color("font_color2");
        }
      }
    }

  }

  .ranking {
    width: 100%;
    height: 200px;

    .ranking-info {
      padding: 1rem;
      @include background_color("background_color1");
      display: flex;
      flex-direction: column;
      gap: 1rem;

      header {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ababab;
        @include border_color("border_color1");

        font-size: 1rem;
        font-weight: 300;
      }

      .ranking-item {
        width: 100%;
        height: 70px;
        display: grid;
        grid-template-areas:
          "author-avatar author-name"
          "author-avatar author-info";
        grid-template-columns: 46px 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        border-bottom: 1px solid #eee;
        @include border_color("border_color1");

        .author-avatar {
          grid-area: author-avatar;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;

          &>img {
            width: 100%;
            height: 100%;
          }
        }

        .author-name {
          grid-area: author-name;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: 10px;
          font-size: 1rem;
          font-weight: 300;
        }

        .author-info {
          grid-area: author-info;
          width: 100%;
          height: 100%;
          display: flex;
          margin: 10px;
          align-items: center;
          font-size: 0.8rem;
          @include font_color("font_color2");
        }
      }



    }
  }
}

@media screen and (max-width: 1000px) {
  .aside {
    display: none;
  }
}
</style>
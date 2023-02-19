<template>
  <div>
    <aside>
      <div class="aside">
        <div class="adv">
          <div class="adv-cover">
            img
          </div>
          <div class="adv-info">
            qr code
          </div>
        </div>
        <div class="ranking">
          <div class="ranking-info">
            <div class="ranking-item" v-for="(author, index) in authors" :key="index">
              <div class="author-avatar">
                <img :src="author.avatar" alt="avatar" />
              </div>
              <div class="author-info">
                {{ author.info }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const authors = [
  {
    info: '张三',
    avatar: 'http://huamurui.github.io/logo.svg'
  },
  {
    info: '张三',
    avatar: 'http://huamurui.github.io/logo.svg'
  }
]
</script>

<style lang="scss" scoped>
.aside {
  width: 260px;

  .adv {
    // position: sticky;
    width: 100%;
    background-color: #eee;

    .adv-cover {
      width: 100%;
      height: 260px;
      background-color: #ff8888;
    }

    .adv-info {
      width: 100%;
      height: 80px;
      background-color: #fbff88;
    }

  }

  .ranking {
    width: 100%;
    height: 200px;
    background-color: #eee;

    .ranking-info {
      width: 100%;
      height: 100%;
      background-color: #fff;

      .ranking-item {
        width: 100%;
        height: 50px;
        background-color: #eee;
        display: flex;
        align-items: center;

        .author-avatar {
          width: 30px;
          height: 30px;
          background-color: #eee;
          margin-left: 10px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        .author-info {
          margin-left: 10px;
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
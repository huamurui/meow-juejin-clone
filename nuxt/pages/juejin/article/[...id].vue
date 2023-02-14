<template>
  <div>
    <JuejinHeader></JuejinHeader>
    <div class="content">
      <BytemdViewer :markdowns="re.data.attributes.content" />
      <div class="action-bar">
        <div class="action-approve">↑</div>
        <div class="action-comment">talk</div>
        <div class="action-collect">star</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { findOne } = useStrapi()
const route = useRoute()
const id = route.params.id as string[]
const re = await findOne<Article>('articles', id[0])
</script>
<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.action-bar {
  display: none;
}

@media screen and (max-width: 768px) {
  .content {
    width: 80%;
    margin: 0 auto;
  }

  .action-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .action-approve {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #f5f5f5;
      cursor: pointer;

      &:hover {
        background-color: #e5e5e5;
      }
    }

    .action-comment {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #f5f5f5;
      cursor: pointer;

      &:hover {
        background-color: #e5e5e5;
      }
    }

    .action-collect {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #f5f5f5;
      cursor: pointer;

      &:hover {
        background-color: #e5e5e5;
      }
    }
  }
}
</style>
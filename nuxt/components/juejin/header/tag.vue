<template>
  <div>

    <div class="tag">
      <div class="container">
        <NuxtLink :to="`/`" class="tag-item">
          全部
        </NuxtLink>

        <NuxtLink :to="`/${tag.attributes.categoryName}`" class="tag-item"
          :class="route.params.tag === tag.attributes.categoryName ? 'active' : ''" v-for="(tag, index) in categories">
          {{ tag.attributes.displayName }}
          {{ }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
let tag = route.params.tag
if (!tag) {
  tag = 'all'
}

const { find } = useStrapi()

const response = await find<Category>('categories', {
  populate: ['articles', 'cover'],
})


const categories = response.data
console.log(response.data)

</script>

<style lang="scss" scoped>
.active {
  color: #007fff;
}

.tag {
  margin-top: 60px;
  border-top: #f5f5f5 1px solid;
  height: 46px;
  overflow: auto;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;

    .tag-item {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      height: 100%;

      margin-left: 20px;
      font-size: 14px;
      cursor: pointer;



      &:hover {
        color: #007fff;
      }
    }
  }
}
</style>
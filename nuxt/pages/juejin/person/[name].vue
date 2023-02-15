<template>
  <div>
    <!-- <JuejinHeader></JuejinHeader> -->

    <div style="position: fixed; top:100px">{{ name }}</div>
    <div>re:{{ re }} </div>
    <!-- <div>avatar:{{ re.data.attributes.avatar }} </div>
    <div>username:{{ re.data.attributes.username }} </div>
    <JuejinFeedArticles :articles="re.data.attributes.articles"></JuejinFeedArticles>
    <JuejinFeedMoments :moments="re.data.attributes.moments"></JuejinFeedMoments> -->
    <div>re.data:{{ re.data }}</div>
  </div>
</template>

<script setup lang="ts">
const { findOne } = useStrapi()
const route = useRoute()
const name = route.params.name as string
const re = await findOne<Person>('users',
  // {
  //   filters: {
  //     username: name
  //  }
  // },
  {
    populate: ['articles', 'moments', 'avatar'],
    // 这里...用 filter 可以拿到数据，但是用的时候会有 undefined 的情况.具体是，用的时候直接 re 是没问题的，但 re.data 却会是空的
    // 我依旧希望能通过 name 去拿到数据，而不是通过 id 去拿...但是先换回去。。。。或者，我不应该在这里写过滤器？
    filters: {
      username: name
    }
  }
)
console.log('re', re)
console.log('re.data', re.data)
</script>

<style scoped>

</style>
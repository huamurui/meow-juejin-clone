<template>
  <div>
    <!-- <JuejinHeader></JuejinHeader> -->
    <MeowJuejinFeedArticles :articles="person[0].articles"></MeowJuejinFeedArticles>

</div>
</template>

<script setup lang="ts">
const { find, findOne } = useStrapi()
const route = useRoute()
const name = route.params.name as string

// // 这办法...太土了点。
// const re: any = await useFetch('http://localhost:1337/api/users?populate[0]=articles&populate[1]=moments&populate[2]=avatar&filters[username]=' + name)
// console.log(re.data._value[0])
// const person = re.data._value[0]


// 确认不是 filter 问题，只写 populate 也一样。是只要用了 Strapi4RequestParams 和 findOne，就会有这种问题...
// 我想想我的需求...就是使用一个接口直接查到所有数据。但是...可能不得不写一堆吧。

// https://github.com/nuxt-modules/strapi/issues/101
// https://github.com/nuxt-modules/strapi/issues/225


// author 不应该这么查..啊。
const person = await find<Person>('users', {
  filters: {
    username: name
  },
  populate: {
    articles: {
      populate: {
        // 查出来了子组件却拿不到..
        author: true,
      }
    },
    moments: true,
    avatar: true
  }
})
console.log(person)

</script>

<style scoped></style>
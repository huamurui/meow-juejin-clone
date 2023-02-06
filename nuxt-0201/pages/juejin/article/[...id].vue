<template>
  <div>
    <a href="https://juejin.cn" target="_blank">
      <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        alt="掘金" />
    </a>
    <p>route id: {{ $route.params.id[0] }}</p>
    <Bytemd :value="re.data.attributes.content" />
  </div>
</template>

<script setup lang="ts">
interface Meow {
  name: string
  content: string
}
const { findOne } = useStrapi()
const route = useRoute()
const id = route.params.id as string[]
const re = await findOne<Meow>('meows', id[0])
</script>

<style scoped>

</style>
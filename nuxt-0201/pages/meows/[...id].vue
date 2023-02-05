<template>
  <div>
    <NuxtLink to="/meows">Back</NuxtLink>
    <p>{{ re.data.attributes.name }}</p>

    <p>{{ re.data.attributes.content }}</p>

    <Milkdown :content="re.data.attributes.content" />
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
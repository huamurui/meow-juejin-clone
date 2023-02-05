<template>
  <div>
    <NuxtLink to="/">Back to "/"</NuxtLink>

    <br>

    <NuxtLink v-for="meow in response.data" :key="meow.id" :to="`/meows/${meow.id}`">
      {{ meow.attributes.name }}
      <br>
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
interface Meow {
  name: string
  content: string
}
const { find } = useStrapi()
const response = await find<Meow>('meows')

const content = ref<string>("Milkdown");
</script>

<style scoped>

</style>
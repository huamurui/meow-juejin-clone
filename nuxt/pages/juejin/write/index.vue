<template>
  <div class="size">
    <BytemdEidtor />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

</script>

<style scoped>
.size {
  width: 100vw;
  height: 100vh;
}
</style>
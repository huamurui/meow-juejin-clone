<template>
  <div class="juejin">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="container">
        <div class="content">
          <slot name="content">feed</slot>
        </div>
        <div class="aside">
          <slot name="aside"></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.juejin {
  background-color: #eee;
}

.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 8rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-top: 0.5rem;
    gap: 0;
  }

  .content {
    width: 100%;
    max-width: 780px;


  }
}
</style>
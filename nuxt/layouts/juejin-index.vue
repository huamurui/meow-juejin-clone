<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="container">
        <div class="content">
          <slot name="content"></slot>
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
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 8rem;
  margin-top: 2rem;

  .content {
    width: 100%;
    max-width: 780px;
    background-color: aquamarine;

    .item {
      width: 100%;
      height: 200px;
      background-color: #eee;
      margin-bottom: 20px;

      .item-info {
        width: 100%;
        height: 50px;
        background-color: #eee;
      }

      .item-pre {
        width: 100%;
        height: 100px;
        background-color: #eee;
      }

      .item-footer {
        width: 100%;
        height: 50px;
        background-color: #eee;
      }
    }
  }
}
</style>
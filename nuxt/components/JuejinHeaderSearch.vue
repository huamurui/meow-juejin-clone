<template>
  <div>
    <div class="search">
      <input type="text" placeholder="搜索掘金" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.search {
  display: flex;
  align-items: center;
  width: 30vw;
  height: 100%;
  margin-right: 20px;


  input {
    @include background_color("background_color2");
    @include font_color("font_color1");

    width: 85%;
    height: 40px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 0 10px;
  }
}




@media screen and (max-width: 768px) {
  .search {
    display: none;

    input {
      display: none;
    }
  }

}
</style>
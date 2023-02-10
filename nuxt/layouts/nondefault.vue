<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="aside">
        <slot name="aside"></slot>
      </div>
    </main>
  </div>
</template>
<!-- https://cn.vuejs.org/guide/components/slots.html#named-slots -->
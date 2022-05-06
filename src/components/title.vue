<template>
  <section class="title">
    <h2><slot /></h2>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgb(238, 238, 238);
  width: 100%;

  h2 {
    font-weight: 500;
  }
}
</style>

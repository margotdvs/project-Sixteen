<template>
  <button>
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  width: 8rem;
  padding: 10px 15px;
  background-color: rgb(243, 63, 63);
  color: rgb(238, 238, 238);
  border-radius: 5px;
  border-style: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
</style>

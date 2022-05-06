<script setup>
import { RouterView } from "vue-router";
import Header from "../src/components/header.vue";
import Footer from "../src/components/footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  font-family: "Poppins", sans-serif;
  color: rgb(74, 74, 74);
}
</style>

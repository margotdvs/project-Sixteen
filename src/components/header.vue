<template>
  <main>
    <div class="header-container">
      <div class="header-content">
        <div class="left">
          <span class="title">Sixteen</span
          ><span class="title part">Clothing</span>
        </div>
        <div class="right">
          <RouterLink to="/"> Home </RouterLink>
          <RouterLink to="products"> Our Products </RouterLink>
          <RouterLink to="about"> About Us </RouterLink>
          <RouterLink to="contact"> Contact Us </RouterLink>
        </div>
      </div>
    </div>
    <span class="title part">Best Offer</span>
    <span class="content">New Arrivals On Sale</span>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
main {
  // position: absolute;
  top: 0;
  left: 0;
  // width: 100%;
  // height: 50%;
  background-image: url("./src/assets/images/slide_01.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.header-container {
  background-color: rgb(37, 38, 36);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  position: absolute;
  padding: 1.5rem 0;
}

.header-content {
  width: 1200px;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: white;
  margin: 0 1rem;
}

a:hover {
  color: white;
  border-bottom: 3px solid rgb(243, 63, 63);
  padding-bottom: 1.5rem;
}

.title {
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-weight: 700;
}

.part {
  color: rgb(243, 63, 63);
  margin-left: 3px;
}

.content {
  font-size: 38px;
  color: white;
  text-transform: uppercase;
  margin-top: 1rem;
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <Navigation />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
.blog-card-wrapper {
  position: relative;
  padding: 60px 16px;
  background-color: #f1f1f1;

  @media(min-width: 600px) {
    padding:80px 16px;
  }
  .blog-cards {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;


    @media (min-width: 400px) {
      grid-template-columns: repeat(1fr);
    }
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>

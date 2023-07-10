
<template>
  <Navigation v-if="!notShowComp" />
  <RouterView />
  <Footer v-if="!notShowComp" />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Navigation, Footer
  },
  data() {
    return {
      notShowComp: null
    }
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgetPassword') {
        this.notShowComp = true
        return;
      }
      this.notShowComp = false
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  }

}


</script>

<style lang="scss">
.blog-card-wrapper {
  position: relative;
  padding: 60px 16px;
  background-color: #f1f1f1;

  @media(min-width: 600px) {
    padding: 80px 16px;
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

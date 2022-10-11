<template>
  <home-nav-bar />
  <RouterView />
  <news-letter />
  <home-footer />
</template>

<script>
import HomeNavBar from "@/layouts/HomeNavBar.vue";
import HomeFooter from "@/layouts/HomeFooter.vue";
export default {
  components: {
    HomeNavBar,
    HomeFooter,
  },
};
</script>

<style>
@import "@/assets/style.css";
</style>

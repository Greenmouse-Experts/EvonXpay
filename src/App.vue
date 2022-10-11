<template>
  <RouterView />
</template>
<script setup>
import { RouterView } from "vue-router";
</script>
<style>
nav a {
  background: transparent;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>

<template>
  <main>
    <app-navigation />
    <nuxt />
    <the-footer />
  </main>
</template>

<script>
import AppNavigation from "~/components/AppNavigation.vue";
import TheFooter from "~/components/TheFooter.vue";

export default {
  components: {
    AppNavigation,
    TheFooter
  }
};
</script>


<style>
html {
  font-family: Mercury Display A, Mercury Display B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  word-spacing: 1px;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
</style>

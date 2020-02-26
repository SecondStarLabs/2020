<template>
  <div>
    <app-navigation />
    <nuxt />
    <the-footer />
  </div>
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
  font-family: Lora, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #141618;
  color: #eee;
  font-display: swap;
}

.logo {
  text-transform: uppercase;
  font-size: 25px;
  display: inline;
}

.logo,
h1,
h2,
h3,
h4 {
  font-family: League Gothic, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}
</style>

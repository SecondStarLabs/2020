/pages/index.vue
<template>
  <main>
    <about-me />
    <say-hello />
  </main>
</template>

<script>
import AboutMe from "~/components/AboutMe.vue";
import SayHello from "~/components/SayHello.vue";

export default {
  components: {
    AboutMe,
    SayHello
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

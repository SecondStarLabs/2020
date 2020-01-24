/pages/index.vue
<template>
  <div>
    <about-me />
    <say-hello />
  </div>
</template>

<script>
import AboutMe from "~/components/AboutMe.vue";
import SayHello from "~/components/SayHello.vue";

export default {
  components: {
    AboutMe,
    SayHello
  }
};
</script>

<style lang="scss" scoped>
</style>
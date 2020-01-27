<template>
  <div>
    <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit" />
  </div>
</template>

<script>
import VueRssFeed from "~/components/VueRssFeed.vue";

export default {
  name: "Demo",
  components: {
    VueRssFeed
  },
  data() {
    return {
      feedUrl: "https://codepen.io/collection/nergYk/feed",
      name: "",
      limit: 5
    };
  }
};
</script>

<style lang="scss" scoped>
p .content p a img {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div>
    <h2>Fountain</h2>
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
      feedUrl: "https://rss.app/feeds/hmsyAr3PyniBpmOd.xml",
      name: "",
      limit: 5
    };
  }
};
</script>

<style lang="scss" scoped></style>

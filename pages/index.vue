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
html {
  line-height: 1.15;
}

html {
  font-family: Mercury Display A, Mercury Display B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
}

section {
  width: 100vw;
  height: 700px;
  background: url(https://sarahdrasnerdesign.com/france.svg) 50% no-repeat
    #141618;
  background-size: auto;
  background-size: cover;
  padding: 100px;
}

.logo,
h1,
h2,
h3,
h4 {
  font-family: Gotham XNarrow A, Gotham XNarrow B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}

h2 {
  font-size: 40px;
}

h2 {
  margin-bottom: 20px;
}

.about {
  width: 45vw;
  padding: 40px 40px 80px;
  background: rgba(0, 0, 0, 0.4);
  line-height: 1.7;
  border-left: 1px solid rgba(255, 255, 0, 0.3);
}

.about {
  width: 45vw;
  padding: 40px 40px 80px;
  background: rgba(0, 0, 0, 0.4);
  line-height: 1.7;
  border-left: 1px solid rgba(255, 255, 0, 0.3);
}

img {
  border-style: none;
}

img {
  border-radius: 50% 50%;
  -webkit-box-shadow: 0 0 0 1px #000;
  box-shadow: 0 0 0 1px #000;
  float: left;
  margin: 10px 30px 30px 10px;
  opacity: 0.7;
}

.about {
  line-height: 1.7;
}

li,
p {
  color: #b5b3b3;
  font-size: 18px;
  font-display: swap;
}
.social-links {
  float: right;
}
.social-links a {
  opacity: 0.5;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.social-links a:hover {
  opacity: 1;
}

.site-links li,
.social-links svg {
  display: inline-block;
  padding-right: 15px;
}

.glitch,
.social-links a {
  color: #fff;
}

.social-links a {
  opacity: 0.5;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
</style>
<template>
  <main>
    <div class="writingheading">
      <h1>Writing</h1>
    </div>

    <div class="blurb">
      <p>
        Second Star Labs is the home for me, Carl Tanner. For more than five
        years, I have been freelance porgramming web-based applications for the
        web, mostly with
        <a href="https://rubyonrails.org/">Ruby on Rails</a>. Lately though, I
        have dipping my toe into
        <a href="https://youtu.be/Y8PXMbr0Kqo" target="_blank">JAMstack</a>
        approaches with the
        <a href="https://vuejs.org/">Vue</a> framework. To make an app
        super-responsive, I sometimes layer Vue on top of Ruby on Rails.
      </p>
    </div>

    <div class="external">
      <h2>Technical Writing</h2>
      <div class="posts">
        <ul>
          <li>
            <a href="#">Nothing yet, stay tuned</a>
            <br />
            <small>&nbsp;</small>
          </li>
          <li>
            <a href="#">Nothing yet, stay tuned</a>
            <br />
            <small>&nbsp;</small>
          </li>
        </ul>
      </div>
    </div>
    <div class="labelnav">
      <WritingNavigation :navItems="pages" />
      <div class="container__content">
        <h1>Please select a page you wish to view</h1>
        <p>
          This is a website for demo purposes of using Nuxt & Contentful
          together
        </p>
      </div>
      <ul style="list-style: none; opacity: 0">
        <li>&nbsp;</li>
      </ul>
      <!-- <ul>
        <li>life updates</li>
      </ul>
      <ul>
        <li>introspection</li>
      </ul>
      <ul>
        <li>year end review</li>
      </ul>
      <ul>
        <li>SVG</li>
      </ul>
      <ul>
        <li>tutorial</li>
      </ul>-->
      <div class="line" style="transform: translate3d(0px, 0px, 0px);"></div>
    </div>

    <div class="blog">
      <h2>On This Site</h2>
      <span>
        <div class="post">
          <div class="surface">
            <h3>Fear</h3>
            <p>April 18th 2018</p>
            <h6 class="tag posttags">
              <span>all posts</span>
            </h6>
            <h6 class="tag posttags">
              <span>life updates</span>
            </h6>
            <a href="/blog/fear" class>
              <button class="seepost">see post ⟶</button>
            </a>
          </div>
        </div>
        <div class="post">
          <div class="surface">
            <h3>Nothing yet</h3>
            <p>April 27th 2019</p>
            <h6 class="tag posttags">
              <span>all posts</span>
            </h6>
            <h6 class="tag posttags">
              <span>life updates</span>
            </h6>
            <a href="/blog/why-netlify" class>
              <button class="seepost">see post ⟶</button>
            </a>
          </div>
        </div>
      </span>
    </div>
  </main>
</template>

<script>
import WritingNavigation from "../components/WritingNavigation";
import { createClient } from "../plugins/contentful";

const contentfulClient = createClient();

export default {
  components: {
    WritingNavigation
  },
  asyncData({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      contentfulClient.getEntries({
        content_type: "page",
        order: "-sys.createdAt"
      })
    ])
      .then(([pages]) => {
        // return data that should be available
        // in the template
        return {
          pages: pages.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
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
h3 {
  font-size: 30px;
}
code {
  background: #eee;
  padding: 4px 10px;
  border-radius: 6px;
}
.tag {
  font-family: Gotham XNarrow A, Gotham XNarrow B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  margin: 10px 10px 10px 0;
  display: inline-block;
  font-size: 13px;
  padding: 4px 20px;
  border-radius: 2px;
  color: #7f7ff8;
  border: 1px solid #7f7ff8;
}
li,
p {
  color: #b5b3b3;
  font-size: 18px;
  font-display: swap;
}
li a,
p a {
  font-weight: 600;
  color: #fff;
}
main {
  margin: 8vmin;
}
input,
textarea {
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  margin: 10px 0 20px;
  font-size: 15px;
  padding: 5px;
  background: #444;
  border: #000;
  border-bottom: 1px solid #44f;
  color: #fff;
}
label {
  font-family: Segoe UI, Roboto, Helvetica Neue, -apple-system,
    BlinkMacSystemFont, Arial, sans-serif;
}
button,
label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 13px;
}
button {
  background: 0 0;
  border: 1px solid #7f7ff8;
  color: #7f7ff8;
  border-radius: 1000px 1000px;
  padding: 10px;
  width: 100%;
  font-family: Gotham XNarrow A, Gotham XNarrow B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  cursor: pointer;
  outline: 0;
}
button:active {
  outline: 1px dotted #666;
}
button:hover {
  background: #44f;
  color: #fff;
  border-color: #44f;
}
button[type="submit"] {
  background: #44f;
  border: none;
  color: #fff;
}
.hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
ul.site-links {
  font-family: Gotham XNarrow A, Gotham XNarrow B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  font-weight: 500;
  padding-left: 0;
  list-style: none;
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 3px;
  opacity: 0.8;
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
.glitch {
  position: relative;
  mix-blend-mode: lighten;
}
.glitch:after,
.glitch:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: #141618;
  clip: rect(0, 0, 0, 0);
}
.glitch:before {
  left: -1px;
  text-shadow: 4px 0 rgba(255, 0, 0, 0.7);
  animation: glitch-loop-1- 0.8s ease-in-out infinite alternate-reverse;
}
.glitch:after {
  left: 1px;
  text-shadow: -7px 0 rgba(0, 0, 255, 0.7);
  animation: glitch-loop-2- 1s ease-in-out infinite alternate-reverse;
}
@-webkit-keyframes glitch-loop-1- {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }
  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(20px, 9999px, 92px, 0);
  }
  to {
    clip: rect(100px, 9999px, 98px, 0);
  }
}
@keyframes glitch-loop-1- {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }
  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(20px, 9999px, 92px, 0);
  }
  to {
    clip: rect(100px, 9999px, 98px, 0);
  }
}
@-webkit-keyframes glitch-loop-2- {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -8px;
    left: 2px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0;
    left: -2px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  to {
    top: -1px;
    left: -4px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
@keyframes glitch-loop-2- {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -8px;
    left: 2px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0;
    left: -2px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  to {
    top: -1px;
    left: -4px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
thead {
  font-family: Helvetica, Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  color: #888;
  text-align: left;
  border-bottom: 1px solid #666;
}
thead th {
  font-weight: 400;
  letter-spacing: 0.05em;
  font-size: 14px;
}
table {
  border-collapse: collapse;
}
td,
th {
  border-bottom: 1px solid #4b4a4a;
  padding: 0.8rem 0;
  text-align: left;
}
tr {
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
}
tr:hover {
  background-color: hsla(0, 0%, 100%, 0.05);
}
.list-item {
  -webkit-transition: all 1s;
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
pre {
  white-space: pre-wrap;
  background: #ddd;
  border-radius: 4px;
  padding: 8px;
}
main {
  display: grid;
  grid-gap: 8vmin;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 250px 1fr;
}
.writingheading {
  grid-column: 1/2;
  position: relative;
}
.blurb,
.writingheading {
  grid-row: 1;
  height: 300px;
}
.blurb {
  grid-column: 2/3;
  font-size: 18px;
  -ms-touch-action: none;
  touch-action: none;
}
.external {
  grid-column: 3;
  grid-row: 1/3;
}
.labelnav {
  grid-column: 1;
  grid-row: 2;
  position: relative;
}
.labelnav ul {
  padding-left: 0;
  list-style: none;
}
.labelnav ul li {
  margin: 0 0 15px;
  cursor: pointer;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
.labelnav ul li:hover {
  color: #fff;
}
.blog {
  grid-column: 2;
  grid-row: 2;
}
.blog h2 {
  font-size: 70px;
  margin-bottom: 20px;
}
.post {
  padding: 30px 0;
  background-size: cover !important;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #333;
}
.post p {
  margin: 10px 0;
}
button.seepost {
  display: inline-block;
  border: none;
  color: #fff;
  padding: 10px 20px;
  background: #aa0753;
  position: absolute;
  right: 0;
  -webkit-box-shadow: 2px 5px 10px 2px #000;
  box-shadow: 2px 5px 10px 2px #000;
  bottom: -46px;
  width: auto;
}
button.seepost:hover {
  -webkit-transform: translate3d(5px, 0, 0);
  transform: translate3d(5px, 0, 0);
}
.surface {
  position: relative;
  z-index: 1000;
}
h1 {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  left: 80px;
  top: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  font-size: 8vmin;
}
.external ul {
  padding-left: 14px;
  border-left: 1px solid #3f3f3f;
}
.external ul li {
  margin: 15px 0;
  opacity: 0.8;
}
.external ul li:hover {
  opacity: 1;
}
.posts {
  margin-left: 5px;
  position: relative;
}
.posts:before {
  position: absolute;
  width: 11px;
  height: 10px;
  background: #141618;
  z-index: 1000;
  top: -2px;
  left: -3px;
  content: "";
}
.csstricks {
  background: #aa0753;
  color: #fff;
  border: none;
  -webkit-box-shadow: 2px 2px 5px 0 #000;
  box-shadow: 2px 2px 5px 0 #000;
}
.line {
  width: 100px;
  background: #cfcfcf;
  height: 1px;
  position: absolute;
  top: 10px;
  left: -110px;
  -webkit-transition: -webkit-transform 0.35s ease-out;
  transition: -webkit-transform 0.35s ease-out;
  transition: transform 0.35s ease-out;
  transition: transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
}
@media screen and (max-width: 1200px) {
  .blog h2 {
    font-size: 45px !important;
  }
}
@media screen and (max-width: 1000px) {
  main {
    grid-gap: 5vmin;
    margin: 60px 5vmin 10vmin;
    grid-template: "a b" "e e" "c c";
  }
  .writingheading {
    grid-area: a;
    min-width: 60px;
    height: 175px;
  }
  .writingheading h1 {
    left: 55px;
    font-size: 40px;
  }
  .blurb {
    grid-area: b;
    height: 175px;
  }
  .external {
    grid-area: c;
  }
  .labelnav {
    display: none;
  }
  .blog {
    grid-area: e;
    margin-bottom: 100px;
  }
  .blog h2 {
    margin-bottom: 0;
    margin-top: 70px;
  }
}
a,
a:active,
a:visited {
  text-decoration: none;
  color: #fff;
}
</style>

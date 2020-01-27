<template>
  <main>
    <div class="writingheading">
      <h1>Writing</h1>
    </div>

    <div class="blurb">
      <p>
        I’m the author of
        <a
          href="https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation-ebook-dp-B06XPVW2PP/dp/B06XPVW2PP/"
          target="_blank"
          >SVG Animations from O’Reilly</a
        >
        and a staff writer for
        <a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a>.
        Sometimes I write for Smashing Magazine, Net Magazine, and others. My
        writing on this site is mostly personal.
      </p>
    </div>

    <div class="external">
      <h2>Technical Writing</h2>
      <div class="posts">
        <ul>
          <li>
            <a
              href="https://css-tricks.com/how-to-turn-a-procreate-drawing-into-a-web-animation/"
              target="_blank"
              >How to Turn a Procreate Drawing into a Web Animation</a
            >
            <br />
            <small>published on Jan 20, 2020 on CSS Tricks</small>
          </li>
          <li>
            <a
              href="https://css-tricks.com/how-to-animate-on-the-web-with-greensock/"
              target="_blank"
              >How to Animate on the Web with GreenSock</a
            >
            <br />
            <small>published on Jan 13, 2020 on CSS Tricks</small>
          </li>
        </ul>
      </div>
    </div>
    <div class="labelnav">
      <ul>
        <li>all posts</li>
      </ul>
      <ul>
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
      </ul>
      <div class="line" style="transform: translate3d(0px, 0px, 0px);"></div>
    </div>

    <div class="blog">
      <h2>On This Site</h2>
      <span>
        <div class="post">
          <div class="surface">
            <h3>Why Netlify?</h3>
            <p>April 27th 2019</p>
            <h6 class="tag posttags">
              <span>all posts</span>
            </h6>
            <h6 class="tag posttags">
              <span>life updates</span>
            </h6>
            <a href="/blog/why-netlify" class>
              <button class="seepost">
                see post ⟶
              </button>
            </a>
          </div>
        </div>
        <div class="post">
          <div class="surface">
            <h3>Mourning as a Developer</h3>
            <p>August 14th 2018</p>
            <h6 class="tag posttags">
              <span>all posts</span>
            </h6>
            <h6 class="tag posttags">
              <span>introspection</span>
            </h6>
            <a href="/blog/mourning-as-a-developer" class>
              <button class="seepost">see post ⟶</button>
            </a>
          </div>
        </div>
      </span>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
html {
  font-family: Mercury Display A, Mercury Display B, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
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
main {
  display: grid;
  grid-gap: 8vmin;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 250px 1fr;
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
a,
a:active,
a:visited {
  text-decoration: none;
  color: #fff;
}

.logo {
  text-transform: uppercase;
  font-size: 25px;
  display: inline;
}

a,
a:active,
a:visited {
  color: #fff;
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
h3 {
  font-size: 30px;
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

a,
a:active,
a:visited {
  text-decoration: none;
  color: #fff;
}
</style>

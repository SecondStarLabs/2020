<template>
  <main class="blogpost">
    <div class="titlearea">
      <h1>Fear</h1>
      <p style="margin-bottom: 35px;">Apr 18, 2018</p>
    </div>
    <div class="bkimg" style="background: rgba(0, 0, 0, 0) url(&quot;/images/uploads/godzilla-toy.jpg&quot;) no-repeat scroll center center;" ></div>
    <section>
      <blog-nav />
      <h6 class="tag posttags">
        <span>all posts</span>
      </h6>
      <h6 class="tag posttags">
        <span>life updates</span>
      </h6>
      <article>
        <!--  -->
        <p
          id="a66c"
          class="hj hk dt ax hl b hm mj ho mk ml mm mn mo mp mq hw gm"
          data-selectable-paragraph
        >Fear is an powerful, amazing thing. Sometimes it can push you forward, like the fear of failing. Once committed, no one desires to fail. Sometimes it can save you from harm, like the fear of being bitten. Many times though, it tells you to push the pause button. That you are not ready for the next step of something you want to do, something that would be awesome in your life. “No, don’t go talk to her right now, she could say something that would hurt you.” “Are you sure that you want to put your hand up? You could be called upon and be wrong and laughed at. You may fail.” “Are you certain about trying for that? You could fail.” While well-meaning, this little voice of doubt inside calling out from the reptilian brain can do more harm than good.</p>
        <p
          id="5504"
          class="hj hk dt ax hl b hm mj ho mk ml mm mn mo mp mq hw gm"
          data-selectable-paragraph
        >It steals away the courage to be great, to be remarkable. This is a true tragedy. It has a ripple effect. Someone gets a great idea on how to solve a problem, and feels the fear, the butterflies. If she went forward, she could be a hero. She could be a hero to the group that has the problem. She could be a hero to her family for creating a new opportunity if it’s work related. She could be a hero to herself for creating that great feeling everyone gets for being right about something important. Or she could hold back, and all that good vaporizes before it even has a chance to breathe. A true shame.</p>
        <p
          id="c684"
          class="hj hk dt ax hl b hm mj ho mk ml mm mn mo mp mq hw gm"
          data-selectable-paragraph
        >Seth Godin in the book “Linchpin: Are You Indispensible?” puts it another way:</p>
        <p
          id="e73c"
          class="hj hk dt ax hl b hm mj ho mk ml mm mn mo mp mq hw gm"
          data-selectable-paragraph
        >“Every day I meet people who have so much to give but have been bullied enough or frightened enough to hold it back. It’s time to stop complying with the system and draw your own map. You have brilliance in you, your contribution is essential, and the art you create is precious. Only you can do it, and you must.”</p>
        <p
          id="1b23"
          class="hj hk dt ax hl b hm mj ho mk ml mm mn mo mp mq hw gm"
          data-selectable-paragraph
        >So today I say do what the great actors from the high school plays and Broadway do: feel the fear, feel the butterflies in your stomach and do it anyway.</p>
        <!--  -->
      </article>
      <hr />
      <a href="/writing" class>
        <button class="seepost">see all writing ⟶</button>
      </a>
    </section>
  </main>
</template>

<script>
import BlogNav from "~/components/blog/BlogNav.vue";

export default {
  components: {
    BlogNav
  }
};
</script>

<style lang="scss" scoped>
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
  width: 100vw;
  margin: 0;
  padding-top: 250px;
  padding-left: 9vmin;
}
main,
section {
  background: #fff;
  position: relative;
}
section {
  padding: 40px 8vmin 10vmin;
  color: #141618;
}
.bkimg {
  position: absolute;
  left: 0;
  top: 0;
  width: 101vw;
  height: 400px;
  border-bottom: 5px solid red;
  background-size: cover !important;
}

.titlearea {
  z-index: 2000;
  position: absolute;
  text-shadow: 0 0 10px #000;
  top: 85px;
}
.titlearea p {
  margin-top: 10px;
  color: #ddd;
}
h1 {
  font-family: unset;
  text-transform: none;
  font-weight: 500;
  font-style: normal;
  color: #fff;
  font-size: 50px;
}
article {
  width: 60vw;
  max-width: 650px;
  font-size: 20px;
  line-height: 1.4;
}
article p {
  line-height: 1.5;
}
article h2 {
  font-size: 40px;
}
.blognav {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0;
  margin-top: -40px;
  float: right;
  z-index: 4000;
  width: 250px;
  padding: 50px 0;
  border-left: 1px solid #ccc;
}
.blognav h4 {
  color: #141618;
  padding: 0 0 20px 20px;
  font-size: 20px;
}
.blognav ul {
  list-style: square;
  line-height: 1;
}
.blognav ul li {
  padding-bottom: 20px;
}
.blognav a {
  color: #666;
  font-weight: 400;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.blognav a:hover {
  color: #141618;
}
hr {
  border: 0;
  height: 1px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(170, 7, 83, 0)),
    color-stop(rgba(170, 7, 83, 0.75)),
    to(rgba(170, 7, 83, 0))
  );
  background-image: linear-gradient(
    90deg,
    rgba(170, 7, 83, 0),
    rgba(170, 7, 83, 0.75),
    rgba(170, 7, 83, 0)
  );
  width: 60vw;
  max-width: 600px;
}
.seepost,
hr {
  margin-top: 50px;
}
.seepost {
  width: 300px;
  border-color: #aa0753;
  color: #aa0753;
}
.seepost:hover {
  background: #aa0753;
  border: 1px solid #aa0753;
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

.tag {
  color: #fff;
  background: #222;
  border: 1px solid #222;
}

button,
label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 13px;
}
button {
  background: none;
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
  outline: none;
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

@media screen and (max-width: 1120px) {
  .blognav {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .titlearea {
    top: 65px !important;
    margin-left: 8vmin;
    text-shadow: 1px 1px 2px #000;
  }
  h1 {
    font-size: 40px;
    width: 85vw;
  }
  main {
    padding-left: 0;
  }
  article {
    width: 80vw;
    font-size: 18px;
  }
  section {
    border-top: 3px solid red;
    padding: 40px 8vmin 20vmin;
  }
  .tag {
    margin: 10px 5px 10px 0;
    display: inline-block;
    padding: 4px 10px;
  }
  .seepost {
    margin-top: 30px;
  }
}
</style>
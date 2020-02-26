<template>
  <section class="astronaut">
    <div class="formarea">
      <h2>Say Hello</h2>
      <br />
      <form
        method="POST"
        name="contact-us"
        style="color: white;"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <p>
          <label for="name" style="color: white;">
            Name
            <br />
            <input id="name" type="name" name="name" required />
          </label>
        </p>
        <!---->
        <p>
          <label for="email" style="color: white;">
            Email
            <br />
            <input id="email" type="email" name="email" required />
          </label>
        </p>
        <!---->
        <p>
          <label for="message" style="color: white;">
            Message
            <br />
            <textarea id="message" name="message" rows="4"></textarea>
          </label>
        </p>
        <!---->
        <p>
          <button type="submit">Send</button>
        </p>
        <!---->
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 40px;
}

.formarea h2 {
  text-align: center;
}
h2 {
  font-size: 40px;
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
*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}
.formarea {
  color: #fff;
}

// image  from https://www.pexels.com/
// and JPNG https://codepen.io/shshaw/full/LVKEdv
// converted to SVG to reduce resolution and to decrease size of background image
section {
  width: 100vw;
  height: 700px;
  background: url(/images/uploads/space-research-science-astronaut-41162.svg)
    50% no-repeat #141618;
  background-size: cover;
  background-position: 0% 0%;
  padding: 100px;
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

.formarea {
  background: rgba(0, 0, 0, 0.3);
  padding: 50px 100px 65px;
  border-radius: 10px;
  color: #fff;
  float: right;
  margin-right: 20vmin;
  width: 500px;
}
.formarea h2 {
  text-align: center;
}
.formarea input,
.formarea label,
.formarea textarea {
  width: 100%;
}
.formarea .error {
  text-transform: uppercase;
  font-size: 14px;
  color: #e28a9d;
  position: absolute;
  line-height: 1.3;
  margin-top: -20px;
  font-family: sans-serif;
}
.formarea .submiterror {
  padding-top: 30px;
}

li,
p {
  color: #b5b3b3;
  font-size: 18px;
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

button,
label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 13px;
}

label {
  font-family: Segoe UI, Roboto, Helvetica Neue, -apple-system,
    BlinkMacSystemFont, Arial, sans-serif;
}

button[type="submit"] {
  background: #44f;
  border: none;
  color: #fff;
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
/* 1000px */
@media screen and (max-width: 1000px) {
  section {
    padding: 8vmin;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: auto;
  }
  .formarea {
    margin-right: 0;
    float: none;
    padding: 3vmin 3vmin 6vmin;
    background: 0 0;
  }
}
</style>
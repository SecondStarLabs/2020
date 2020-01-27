<template>
  <main>
    <section class="projectheading">
      <h1>Projects</h1>
      <project-blurb />
    </section>

    <section class="codepen">
      <h2>CodePen</h2>
      <codepen-listing />
    </section>
    <section class="github">
      <h2>GitHub</h2>
      <table>
        <tbody class="repos" v-for="repo in repos" :key="repo.id">
          <tr class="repo">
            <td>
              <h3>
                <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
              </h3>
              <p>✩ {{ repo.stargazers_count }}</p>
              <p>{{ repo.description }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import CodepenListing from "~/components/CodepenListing.vue";
import ProjectBlurb from "~/components/ProjectBlurb.vue";

import axios from "axios";
export default {
  fetch({ store }) {
    return axios
      .get("https://api.github.com/users/SecondStarLabs/repos")
      .then(res => {
        store.commit("githubRepos", res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    repos() {
      return this.$store.state.repos;
    }
  },
  components: { CodepenListing, ProjectBlurb }
};
</script>

<style lang="scss" scoped>
html {
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
}

*::after,
*::before {
  box-sizing: border-box;
}

main {
  margin: 8vmin;
}

main {
  display: grid;
  grid-gap: 8vmin;
  grid-template-columns: 1fr 2fr 2fr;
}

.github {
  grid-column: 3;
}
.projectheading {
  grid-column: 1/2;
  position: fixed;
}

.projectblurb {
  bottom: 8vmin;
  position: fixed;
  line-height: 1.4;
  width: 210px;
}

li,
.projectblurb p {
  color: #b5b3b3;
  font-size: 18px;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
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

button,
input {
  overflow: visible;
}

button {
  margin: 15px 0;
  color: #ec633a;
}
button,
button :hover {
  border: 1px solid #ec633a;
}
button :hover {
  background: #ec633a;
}

button,
input,
optgroup,
select,
textarea {
  line-height: 1.15;
}

a,
a:active,
a:visited,
p a,
p a:active,
p a:visited {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
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

.codepen {
  grid-column: 2/3;
  font-size: 18px;
}

/* max-width:1000px */

@media screen and (max-width: 1000px) {
  main {
    grid-gap: 5vmin;
    margin: 4vmin;
    grid-template: "a" "b" "c";
  }
  .projectheading {
    grid-area: a;
    position: relative;
    height: 150px;
    margin: 30px 0;
  }
  .projectheading h1 {
    left: 40px;
    font-size: 40px;
  }
  .projectheading .projectblurb {
    position: relative;
    bottom: auto;
    margin-left: 70px;
  }
  .codepen {
    grid-area: b;
  }
  .github {
    grid-area: c;
  }
}

/* max-width:500 */

@media screen and (max-width: 500px) {
  nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: -10px;
    padding: 30px 20px 25px;
    -webkit-box-shadow: 0 2px 10px 0 #000;
    box-shadow: 0 2px 10px 0 #000;
    border: 1px solid #222;
  }
  nav a {
    margin: 0 20px;
  }
  nav svg {
    margin-left: -30px;
  }
}

/* github  */

table {
  border-collapse: collapse;
}

tr {
  transition: all 0.15s ease;
}

td,
th {
  border-bottom: 1px solid #4b4a4a;
  padding: 0.8rem 0;
  text-align: left;
}

.github h3 {
  padding-bottom: 5px;
  font-size: 25px;
}

a,
a:active,
a:visited,
p a,
p a:active,
p a:visited {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

img {
  width: 100%;
}
</style>

<template>
<nav>
  <a href="/" class>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 200.00 200.00"
      preserveAspectRatio="xMidYMid meet"
      aria-labelledby="logo"
      role="presentation"
    >
      <title id="logo" lang="en">Second Star Labs Icon</title>
      <g
        transform="translate(0.000000,200.000000) scale(0.100,-0.100)"
        fill="#d4d4d4"
        stroke="none"
      >
        <path
          d="M0 1000 l0 -1000 1000 0 1000 0 0 1000 0 1000 -1000 0 -1000 0 0 -1000z m1266 918 c44 -15 99 -35 122 -47 38 -19 58 -21 252 -21 l210 0 0 -210 c0 -163 3 -217 14 -238 21 -41 64 -179 75 -246 30 -169 -4 -420 -75 -558 -11 -21 -14 -77 -14 -238 l0 -210 -210 0 c-187 0 -215 -2 -248 -19 -20 -10 -77 -32 -127 -47 -85 -27 -100 -29 -265 -29 -187 0 -250 12 -389 72 -50 22 -66 23 -257 23 l-204 0 0 205 c0 186 -2 210 -20 245 -62 121 -96 311 -85 470 8 101 47 256 83 327 20 39 22 57 22 248 l0 205 205 0 c156 0 213 3 233 14 34 17 108 43 192 67 54 15 94 18 235 15 149 -3 180 -6 251 -28z"
        />
        <path
          d="M785 1867 c-309 -79 -539 -295 -639 -602 -135 -412 65 -875 459 -1065 123 -60 211 -81 357 -87 109 -5 141 -2 225 17 182 41 330 127 460 263 214 227 292 542 209 844 -84 304 -309 529 -626 625 -48 15 -103 21 -210 24 -127 3 -157 1 -235 -19z m385 -392 c7 -148 14 -272 17 -275 3 -3 49 42 103 100 55 57 101 102 104 99 3 -2 -18 -29 -46 -59 -80 -86 -141 -160 -137 -164 6 -6 287 -26 366 -26 37 0 74 -4 81 -8 7 -5 -83 -14 -200 -21 -117 -7 -221 -15 -231 -18 -15 -4 -10 -14 35 -61 30 -32 67 -74 82 -94 16 -21 33 -35 39 -31 6 4 7 1 2 -7 -5 -8 -36 16 -100 80 -51 51 -95 88 -98 84 -4 -8 -14 -217 -22 -452 -1 -51 -5 -95 -8 -98 -2 -3 -8 70 -12 163 -13 300 -20 386 -30 389 -10 2 -336 -332 -342 -352 -2 -6 2 -11 9 -12 7 0 76 -4 153 -8 122 -7 133 -9 85 -15 -30 -4 -98 -11 -150 -14 l-95 -6 53 -56 c69 -72 58 -83 -13 -13 -46 45 -55 51 -61 36 -4 -10 -5 -88 -2 -174 3 -86 2 -137 -1 -112 l-5 45 -6 -55 c-4 -41 -8 -12 -13 110 -5 91 -11 173 -14 184 -4 16 -12 11 -56 -30 l-50 -49 47 57 47 56 -88 7 c-247 19 -252 20 -84 28 85 5 159 11 163 13 8 5 -77 112 -112 142 -12 10 -10 10 10 1 14 -6 46 -35 72 -65 l47 -53 5 42 c3 23 9 107 14 187 7 122 9 133 12 70 l3 -75 8 50 c4 28 5 -22 2 -112 -3 -105 -1 -163 5 -163 6 0 61 54 124 120 181 193 217 234 213 241 -3 3 -98 12 -212 19 -234 14 -327 27 -205 29 92 1 416 22 421 27 3 3 -125 150 -164 189 -47 47 -47 58 0 15 61 -56 81 -76 142 -143 19 -22 37 -36 41 -32 6 6 30 385 31 494 2 116 9 34 21 -224z m-403 -697 c-2 -18 -4 -4 -4 32 0 36 2 50 4 33 2 -18 2 -48 0 -65z m0 -265 c-2 -21 -4 -4 -4 37 0 41 2 58 4 38 2 -21 2 -55 0 -75z"
        />
      </g>
      <head xmlns />
    </svg>
    <span class="logo">&nbsp;&nbsp;Second Star Labs</span>
  </a>
  <ul class="site-links">
    <li>
      <a href="/writing" class>writing</a>
    </li>

    <li>
      <a href="/projects" class="nuxt-link-exact-active nuxt-link-active">projects</a>
    </li>
  </ul>
</nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page"])
};
</script>

<style scoped lang="scss">
nav {
  background: #141618;
  color: #fff;
  padding: 30px 8vmin 25px;
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

/*  */
ul.site-links {
  float: right;
}
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
svg {
  vertical-align: middle;
  margin-top: -15px;
}
.fernpath {
  fill: blue;
}
a,
a:active,
a:visited {
  color: #fff;
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}
.logo,
h1,
h2,
h3,
h4 {
  font-family: League Gothic, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}
h2 {
  font-size: 40px;
}

/*  */
ul.site-links {
  font-family: League Gothic, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  font-weight: 500;
  padding-left: 0;
  list-style: none;
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 3px;
  opacity: 0.8;
}

.site-links li,
.social-links {
  display: inline-block;
  padding-right: 15px;
}

.logo,
h1,
h2,
h3,
h4 {
  font-family: League Gothic, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}
</style>
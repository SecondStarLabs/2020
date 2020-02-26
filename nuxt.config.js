/*
 ** Contentful blog api
 */
const config = require("./contentful.json");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Second Star Labs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Second Star Labs is the home site for Carl Tanner"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lora"
      },
      {
        rel: "stylesheet",
        href: "./fonts/leaguegothic.css"
      },
      {
        rel: "preload",
        as: "style",
        href: "https://cloud.typography.com/7626114/6931412/css/fonts.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/7626114/6931412/css/fonts.css"
      }
    ]
  },
  router: {
    middleware: "pages"
  },
  /*
   ** generate the static files of the blog
   */
  // generate: {
  //   routes: function() {
  //     const fs = require("fs");
  //     return fs.readdirSync("~/assets/content/blog").map(file => {
  //       return {
  //         route: `/blog/${file.slice(2, -5)}`,
  //         payload: require(`~/assets/content/blog/${file}`)
  //       };
  //     });
  //   }
  // },
  /*
   ** Contentful blog api
   */
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {}
};

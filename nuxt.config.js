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
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {}
};

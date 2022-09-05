export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "exio8-coming-soon",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/fza0fzq.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vee-validate.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true,
    componentPlugins: [
      "FormPlugin",
      "FormGroupPlugin",
      "FormInputPlugin",
      "FormSelectPlugin",
      "ModalPlugin",
      "NavbarPlugin", // also includes NavPlugin, DropdownPlugin, CollapsePlugin
      "ImagePlugin",
      "LayoutPlugin",
      "ButtonPlugin",
    ],
    directivePlugins: ["VBScrollspyPlugin"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate"],
  },
};

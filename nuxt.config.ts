// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_backend_api,
      baseUrl: "http://127.0.0.1:8000",
    },
  },
  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/i18n", "nuxt-swiper", "@pinia/nuxt"],
  i18n: {
    // Module Options
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: "en-US",
    locales: [
      {
        code: "en-US",
        file: "en-US.json",
        name: "En",
      },
      {
        code: "en-TM",
        file: "in-TM.json",
        name: "த",
      },
      {
        code: "en-HI",
        file: "in-HI.json",
        name: "हि",
      },
    ],
  },
  app: {
    head: {
      title: "SportBet",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons@latest/css/all/all.css",
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
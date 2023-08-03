import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), prefetch(), svelte(), image(), astroI18next()],
  output: "static",
  // adapter: vercel({
  //   analytics: true,
  //   includeFiles: [
  //     "./public/locales/en/translation.json", 
  //     "./public/locales/ro/translation.json"
  //   ],
  // }),
});
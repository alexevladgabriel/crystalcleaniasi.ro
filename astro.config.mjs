import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 80,
    host: true
  },
  integrations: [tailwind(), prefetch(), svelte(), image(), astroI18next()],
});
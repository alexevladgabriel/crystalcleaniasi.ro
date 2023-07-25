import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "ro",
  locales: ["en", "ro"], // "en", "fr", "de", "hu", "uk", "ru",
  i18nextServer: {
    debug: true,
  },
};

export default config;

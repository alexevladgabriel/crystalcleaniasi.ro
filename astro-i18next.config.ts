
import en from "./public/locales/en/translation.json" assert {type: "json"};
import ro from "./public/locales/ro/translation.json" assert {type: "json"};

import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "ro",
  locales: ["en", "ro"], // "en", "fr", "de", "hu", "uk", "ru",
  i18nextServer: {
    debug: true,
    resources: {
      en: {
        translation: {
          ...en
        }
      },
      ro: {
        translation: {
          ...ro
        }
      },
    },
    initImmediate: false,
    preload: ["en", "ro"],
  },
  i18nextServerPlugins: {
    fsBackend: null
  },
};

export default config;
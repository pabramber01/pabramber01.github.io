import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pabramber01.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
});

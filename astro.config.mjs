import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://taragay.space/",
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  output: "static", // ✅ statik export için
  image: {
    service: {
      entrypoint: "astro/assets/services/compile", // ✅ sharp hatasını da önler
    },
  },
});

// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site: "https://Ku6epXBOCTuK.github.io",
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});

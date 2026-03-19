import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [tailwind()],
});


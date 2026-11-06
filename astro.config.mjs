// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astauf03.github.io",
  base: import.meta.env.PROD ? "/pretty-fun-portfolio/" : "/",
  integrations: [preact()]
});
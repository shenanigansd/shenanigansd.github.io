import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://bradley.dog",
  integrations: [sentry(), spotlightjs(), preact()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  })
});
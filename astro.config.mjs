import { defineConfig } from 'astro/config';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [sentry(), spotlightjs()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
  },
  }),
});

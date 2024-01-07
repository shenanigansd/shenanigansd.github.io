import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://bradley.dog",
  integrations: [
    sentry({
      dsn: "https://1555c537c0a21037d9d40f137e608124@o1196120.ingest.sentry.io/4506532398432256",
      sourceMapsUploadOptions: {
        project: "bradley-dog",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    spotlightjs(), preact(), tailwind()
  ],
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

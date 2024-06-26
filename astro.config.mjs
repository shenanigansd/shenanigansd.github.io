import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";

export default defineConfig({
  integrations: [
    sentry({
      dsn: "https://1555c537c0a21037d9d40f137e608124@o1196120.ingest.us.sentry.io/4506532398432256",
      sourceMapsUploadOptions: {
        project: "bradley-dog",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});

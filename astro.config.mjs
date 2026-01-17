import { execSync } from "node:child_process";
import { defineConfig } from "astro/config";

// Get Git commit hash at build time
const getGitCommitHash = () => {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
  } catch (error) {
    return "unknown";
  }
};

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      __GIT_COMMIT_HASH__: JSON.stringify(getGitCommitHash()),
    },
  },
});

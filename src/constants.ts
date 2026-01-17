import { execSync } from "node:child_process";

export const REPO_URL =
  "https://github.com/shenanigansd/shenanigansd.github.io";

export const GIT_COMMIT_HASH = (() => {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
  } catch {
    return "unknown";
  }
})();

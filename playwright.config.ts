import { defineConfig } from "@playwright/test";

// Visual-regression gate for the "pixel-identical" remediation.
// Baseline is captured against current code (--update-snapshots), then every
// change is proven with `playwright test` asserting maxDiffPixels: 0.
export default defineConfig({
  testDir: "./visual",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  timeout: 120_000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 0,
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },
  use: {
    baseURL: "http://localhost:4188",
    deviceScaleFactor: 1,
    // Keep rendering deterministic across runs.
    launchOptions: { args: ["--force-color-profile=srgb", "--disable-lcd-text"] },
  },
});

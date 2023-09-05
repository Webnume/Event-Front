/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { InlineConfig } from "vitest";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  worker: {
    plugins: [react()],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
    css: true,
  },
  root: ".",
} as VitestConfigExport);

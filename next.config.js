/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  // Disable blocking the build on lint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // OPTIONAL: Remove i18n unless you’re actually using it
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

export default config;

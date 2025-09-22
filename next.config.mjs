import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["your-image-domains.com"],
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
  },
});

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nl", "fy"],
    localeDetection: false,
  },
  fallbackLng: {
    default: ["en"],
  },
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nl", "fy"],
    localePath: "./public/locales",
    defaultNS: "common",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
}

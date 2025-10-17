/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'blob.v0.app',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],
    unoptimized: true,
  },
  i18n: {
    locales: ['en'], // keep only English
    defaultLocale: 'en',
    localeDetection: false, // stop redirecting by location
  },
}

export default nextConfig

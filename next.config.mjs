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
    locales: ['en', 'nl', 'fy'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

export default nextConfig

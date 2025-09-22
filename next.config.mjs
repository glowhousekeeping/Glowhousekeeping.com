/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  i18n: {
    locales: ['en', 'nl', 'fy'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['blob.v0.app', 'blobs.vusercontent.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'blobs.vusercontent.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

export default nextConfig;

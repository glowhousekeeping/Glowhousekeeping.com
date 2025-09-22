/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode to catch potential issues early
  reactStrictMode: true,

  // SWC minifier for faster production builds
  swcMinify: true,

  // Standalone output for optimal Vercel deployment
  output: 'standalone',

  // i18n setup for English and Dutch
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },

  // Image optimization domains (add any external image hosts)
  images: {
    domains: ['your-image-domains.com'], // replace with your domains
  },

  // Experimental settings for Next.js App Router
  experimental: {
    appDir: true,
  },

  // TypeScript settings
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint settings
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Optional headers for security
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

// Export as ES module
export default nextConfig;

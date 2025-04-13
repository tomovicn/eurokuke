/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr'],
  },
  images: {
    domains: ['images.unsplash.com', 'localhost'],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;

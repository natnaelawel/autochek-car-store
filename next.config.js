/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    domains: ['demo.w3layouts.com'],
  },
  reactStrictMode: true,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
}

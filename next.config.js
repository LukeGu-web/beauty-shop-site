/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'www.laserclinics.com.au',
      'www.laserclinicsnewzealand.co.nz',
    ],
  },
}

module.exports = nextConfig

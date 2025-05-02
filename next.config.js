/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/homepage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/homepage/' : '',
}

module.exports = nextConfig 
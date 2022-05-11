/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['res.cloudinary.com', 'thepracticaldev.s3.amazonaws.com', 'dev.to'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },],
    domains: ['avatars.githubusercontent.com', 'wellgroomedgentleman.com']
  },
}

module.exports = nextConfig

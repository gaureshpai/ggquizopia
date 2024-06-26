/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'wellgroomedgentleman.com',
      'www.google.com',
      'posterspy.com',
      'static.tvtropes.org',
      'static.wikia.nocookie.net',
      'upload.wikimedia.org',
      'res.cloudinary.com',
      'cdn.britannica.com',
      'cdn.marvel.com',
      'github.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.google.com',
      },
      {
        protocol: 'https',
        hostname: '**.posterspy.com',
      },
      {
        protocol: 'https',
        hostname: '**.tvtropes.org',
      },
      {
        protocol: 'https',
        hostname: '**.nocookie.net',
      },
      {
        protocol: 'https',
        hostname: '**.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.britannica.com',
      },
      {
        protocol: 'https',
        hostname: '**.marvel.com',
      },
      {
        protocol: 'https',
        hostname: '**.github.com'
      }
    ]
  },
};

module.exports = nextConfig;

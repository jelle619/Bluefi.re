// next.config.js

module.exports = {
  images: {
    remotePatterns: [
      // Geocaching
      {
        protocol: 'https',
        hostname: 'img.geocaching.com',
        port: '',
        pathname: '/stats/**',
      },
      {
        protocol: 'https',
        hostname: 'www.opencaching.de',
        port: '',
        pathname: '/images/statpics/**',
      },
      {
        protocol: 'https',
        hostname: 'www.opencaching.nl',
        port: '',
        pathname: '/images/statpics/**',
      },
      // Steam
      {
        protocol: 'https',
        hostname: '**.steamstatic.com',
        port: '',
        pathname: '/steam/apps/**',
      },
    ],
  },
}

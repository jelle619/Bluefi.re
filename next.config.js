// next.config.js

module.exports = {
  images: {
    remotePatterns: [
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
    ],
  },
}

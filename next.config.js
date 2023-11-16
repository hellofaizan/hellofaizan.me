/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        port: '',
        pathname: '/external/**',
      },
      {
        protocol: 'https',
        hostname: 'icons.duckduckgo.com',
        port: '',
        pathname: '/ip3/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/hellofaizan',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: 'https://blog.hellofaizan.me',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/hellofaizaan',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/vUHMxPvege',
        permanent: true
      },
      {
        source: '/all',
        destination: 'https://i.hellofaizan.me',
        permanent: true
      }
    ]
  },
}

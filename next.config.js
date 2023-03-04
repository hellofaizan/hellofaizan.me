/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/hellofaizan',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/hellofaizandev',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/vUHMxPvege',
        permanent: true
      },
      {
        source: '/mail',
        destination: 'mailto:faizancurious@gmail.com',
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

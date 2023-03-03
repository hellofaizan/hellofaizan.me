/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/cnrad',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/notcnrad',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://linkedin.com/in/cnrad',
        permanent: true,
      },
    ]
  },
}

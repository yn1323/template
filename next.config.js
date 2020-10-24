/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path')
const withOffline = require('next-offline')

const nextConfig = {
  webpack: config => {
    config.resolve.alias['src'] = resolve(__dirname, 'src')
    return config
  }
}

module.exports = withOffline(nextConfig)

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  env: {
    endpoint: isProd
      ? 'https://100.100.100'
      : 'http://0.0.0.0',
  },
}

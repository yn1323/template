module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
}

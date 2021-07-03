const isCSR = process.env.csr === '1'
const lang = process.env.lang ?? 'ja'

const common = {
  reactStrictMode: true,
  env: {
    lang: lang,
    csr: isCSR,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}

const i18n = isCSR
  ? {}
  : {
      i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'ja',
      },
    }
const exportPathMap = isCSR
  ? {
      // Avoid 404 when refresh
      trailingSlash: true,
      exportPathMap: async (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) => {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
        }
      },
    }
  : {}

module.exports = { ...common, ...i18n, ...exportPathMap }

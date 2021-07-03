const isStaticBuild = process.env.CSR === '1'

const common = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}

const i18n = isStaticBuild
  ? {}
  : {
      i18n: {
        locales: ['en', 'ja'],
        defaultLocale: 'ja',
      },
    }
const exportPathMap = isStaticBuild
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

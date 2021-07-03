const isStaticBuild = process.env.CSR === '1'

const common = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
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
console.log(isStaticBuild)
console.log(i18n)
module.exports = { ...common, ...i18n }

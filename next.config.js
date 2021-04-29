const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


const nextConfig = {
  future: {
    webpack5: true
  },
  webpack (config) {
    // const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
    // fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    })

    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      // '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      'emotion-theming': toPath('node_modules/@emotion/react')
    }

    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)

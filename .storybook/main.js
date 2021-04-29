// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../components/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/builder-webpack5'
  ],
  webpackFinal: async (config, {configType}) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      'emotion-theming': toPath('node_modules/@emotion/react')
    }
    return config
  }
}

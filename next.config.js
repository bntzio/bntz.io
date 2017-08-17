const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, './pages'),
          path.resolve(__dirname, './components')
        ]
      })

      config.plugins.push(new DashboardPlugin())
    }

    return config
  }
}

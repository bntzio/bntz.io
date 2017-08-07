const path = require('path')
const jsonSummary = require('./content/summary.json')

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
    }

    return config
  },
  exportPathMap: () => {
    const posts = {}
    const paths = {}
    jsonSummary.fileMap && Object.keys(jsonSummary.fileMap)
      .forEach((file) => {
        const fileObj = jsonSummary.fileMap[file]
        const obj = {}
        if (fileObj.paths) {
          // Handle custom paths/aliases
          obj.page = fileObj.page
          obj.query = { filePath: fileObj.filePath }
          fileObj.paths.forEach((path) => {
            paths[path] = obj
          })
        } else if (file.indexOf('content/posts') === 0) {
          // Handle posts
          const page = file.split('content').join('').split('.json').join('')
          posts[page] = {
            page: '/post',
            query: {
              fullUrl: page
            }
          }
        }
      })

    return Object.assign({}, {
      '/': { page: '/' }
    }, posts, paths) // Aliases
  }
}

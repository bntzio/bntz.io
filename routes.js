const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('post', '/blog/:slug')
routes.add('entry', '/journal/:slug')
routes.add('project', '/projects/:slug')
routes.add('period', '/now/:slug')

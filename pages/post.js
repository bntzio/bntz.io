import Layout from '../components/Layout'
import { getSlugsAndPaths } from '../utils/content'

const post = ({ title, body }) => (
  <Layout>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: body }}></div>
  </Layout>
)

const findBySlug = async (slug) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const slugsAndPaths = await getSlugsAndPaths()
  let postPath
  let post

  slugsAndPaths.forEach(file => {
    if (file.slug === slug) {
      postPath = file.path
    }
  })

  const res = await fetch(`${baseUrl}/${postPath}`)
  post = await res.json()

  return post
}

post.getInitialProps = async ({ query }) => {
  const slug = query.slug
  const post = await findBySlug(slug)

  return { title: post.title, body: post.bodyHtml }
}

export default post

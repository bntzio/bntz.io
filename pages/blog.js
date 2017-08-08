import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import { getPaths } from '../utils/content'

const blog = ({ posts }) => (
  <Layout>
    <Blog posts={posts} />
  </Layout>
)

blog.getInitialProps = async ({ req }) => {
  const baseUrl = process.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const paths = await getPaths()
  let posts = []

  for (let path of paths) {
    const jsonFilePath = path.replace('.md', '.json')
    const res = await fetch(`${baseUrl}/static/${jsonFilePath}`)
    const data = await res.json()
    posts.push(data)
  }

  return { posts }
}

export default blog

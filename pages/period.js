import fetch from 'isomorphic-unfetch'
import Period from '../components/Period'
import Layout from '../components/layout/'
import { getSlugsAndPaths } from '../utils/content'

const period = ({ title, body }) => (
  <Layout>
    <Period title={title} body={body} />
  </Layout>
)

const findBySlug = async (slug) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const slugsAndPaths = await getSlugsAndPaths()
  let nowPath
  let now

  slugsAndPaths.forEach(file => {
    if (file.slug === slug) {
      nowPath = file.path
    }
  })

  const res = await fetch(`${baseUrl}/${nowPath}`)
  now = await res.json()

  return now
}

period.getInitialProps = async ({ query }) => {
  const slug = query.slug
  const now = await findBySlug(slug)

  return { title: now.title, body: now.bodyHtml }
}

export default period

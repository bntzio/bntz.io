import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/'
import Now from '../components/Now'
import { getPaths } from '../utils/content'

const now = ({ nows }) => (
  <Layout>
    <Now nows={nows} />
  </Layout>
)

now.getInitialProps = async ({ req }) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const paths = await getPaths('nows')
  let nows = []

  for (let path of paths) {
    const jsonFilePath = path.replace('.md', '.json')
    const res = await fetch(`${baseUrl}/static/${jsonFilePath}`)
    const data = await res.json()
    nows.push(data)
  }

  return { nows }
}

export default now

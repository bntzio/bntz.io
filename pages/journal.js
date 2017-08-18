import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/'
import Journal from '../components/Journal'
import { getEntryPaths } from '../utils/content'

const journal = ({ entries }) => (
  <Layout>
    <Journal entries={entries} />
  </Layout>
)

journal.getInitialProps = async ({ req }) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const paths = await getEntryPaths()
  let entries = []

  for (let path of paths) {
    const jsonFilePath = path.replace('.md', '.json')
    const res = await fetch(`${baseUrl}/static/${jsonFilePath}`)
    const data = await res.json()
    entries.push(data)
  }

  return { entries }
}

export default journal

import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/'
import Work from '../components/Work'
import { getPaths } from '../utils/content'

const projects = ({ projects }) => (
  <Layout>
    <Work projects={projects} />
  </Layout>
)

projects.getInitialProps = async ({ req }) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const paths = await getPaths('projects')
  let projects = []

  for (let path of paths) {
    const jsonFilePath = path.replace('.md', '.json')
    const res = await fetch(`${baseUrl}/static/${jsonFilePath}`)
    const data = await res.json()
    projects.push(data)
  }

  return { projects }
}

export default projects

import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Project from '../components/Project'
import { getSlugsAndPaths } from '../utils/content'

const project = ({ title, body }) => {
  return (
    <Layout>
      <Project title={title} body={body} />
    </Layout>
  )
}

const findBySlug = async (slug) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bntz.io' : 'http://localhost:3000'
  const slugsAndPaths = await getSlugsAndPaths()
  let projectPath
  let project

  slugsAndPaths.forEach(file => {
    if (file.slug === slug) {
      projectPath = file.path
    }
  })

  const res = await fetch(`${baseUrl}/${projectPath}`)
  project = await res.json()

  return project
}

project.getInitialProps = async ({ query }) => {
  const slug = query.slug
  const project = await findBySlug(slug)

  return { title: project.title, body: project.bodyHtml }
}

export default project

import fetch from 'isomorphic-unfetch'
import Project from '../components/Project'
import { getSlugsAndPaths } from '../utils/content'

const project = ({ title, description, body, heroColor, titleColor, website, github }) => {
  return <Project title={title} description={description} body={body} heroColor={heroColor} titleColor={titleColor} website={website} github={github} />
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

  const { title, description, bodyHtml, heroColor, titleColor, website, github } = project
  const body = bodyHtml

  return { title, description, body, heroColor, titleColor, website, github }
}

export default project

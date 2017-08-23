import uuid from 'uuid/v4'
import styled from 'styled-components'
import projectsData from '../data/projects'
import Project from './Project'
import MiniNav from './common/MiniNav'
import Container from './common/Container'

const Work = () => {
  return (
    <Container>
      <MiniNav url="/" title="Projects" />
      <Frames>
        { projectsData.map((project) => {
          const { name, description, url } = project
          return <Project key={uuid()} name={name} description={description} url={url} />
        }) }
      </Frames>
    </Container>
  )
}

const Frames = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default Work

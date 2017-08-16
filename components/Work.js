import React from 'react'
import uuid from 'uuid/v4'
import Link from 'next/link'
import styled from 'styled-components'
import BackButton from './common/BackButton'
import projectsData from '../data/projects'
import Project from './Project'

class Work extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'red'
  }
  render () {
    return (
      <Container>
        <Link href="/">
          <a><BackButton /></a>
        </Link>
        <Frames>
          { projectsData.map((project) => {
            const { name, description, url } = project
            return <Project key={uuid()} name={name} description={description} url={url} />
          }) }
        </Frames>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Frames = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default Work

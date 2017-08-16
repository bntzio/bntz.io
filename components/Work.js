import React from 'react'
import uuid from 'uuid/v4'
import Link from 'next/link'
import styled from 'styled-components'
import BackButton from './common/BackButton'
import projectsData from '../data/projects'
import Project from './Project'
import { rem } from '../utils/styleUtils'

class Work extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'red'
  }
  render () {
    return (
      <Container>
        <MiniNav>
          <Link href="/">
            <a><BackButton /></a>
          </Link>
          <Title id="title">Projects</Title>
        </MiniNav>
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

const MiniNav = styled.nav`
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  font-family: 'Proxima N W01 Bold';
  ${rem('font-size', 20)};
`

const Frames = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default Work

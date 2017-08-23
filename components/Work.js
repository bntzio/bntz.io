import React from 'react'
import styled from 'styled-components'
import MiniNav from './common/MiniNav'
import Container from './common/Container'
import h from '../utils/helpers'

class Work extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#222222'
  }
  render () {
    const { projects } = this.props

    return (
      <Container>
        <MiniNav url="/" title="Projects" />
        <Frames>
          {h.renderFrames(projects, 'project')}
        </Frames>
      </Container>
    )
  }
}

const Frames = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default Work

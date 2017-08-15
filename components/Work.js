import React from 'react'
import styled from 'styled-components'
import { rem, media } from '../utils/styleUtils'

class Work extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'red'
  }
  transformFrame (el) {
    if (window.innerWidth > 768) {
      let xAngle = 0
      let yAngle = 0
      const z = 50
      const xRel = el.clientX - el.target.offsetLeft
      const yRel = el.clientY - el.target.offsetTop
      const width = el.target.offsetWidth
      yAngle = -(0.5 - (xRel / width)) * 40
      xAngle = (0.5 - (yRel / width)) * 40
      el.target.style.transform = `perspective(525px) translateZ(${z}px) rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
      el.target.style.transition = 'none'
    }
  }
  resetTransform (el) {
    if (window.innerWidth > 768) {
      el.target.style.transform = 'perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)'
      el.target.style.transition = 'all 150ms linear 0s'
    }
  }
  render () {
    return (
      <Container>
        <Back>
          <Arrow>👈</Arrow>
        </Back>
        <Frames>
          <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
            First Project
            <br/>
            Read Case Study
          </Frame>
          <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
            Second Project
            <br/>
            Read Case Study
          </Frame>
          <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
            Third Project
            <br/>
            Read Case Study
          </Frame>
          <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
            Fourth Project
            <br/>
            Read Case Study
          </Frame>
          <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
            Fifth Project
            <br/>
            Read Case Study
          </Frame>
          <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
            Sixth Project
            <br/>
            Read Case Study
          </Frame>
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

const Back = styled.div`
  padding: 1rem;
`

const Arrow = styled.div`
  cursor: pointer;
`

const Frames = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Frame = styled.div`
  display: flex;
  flex: 0 0 100%;
  ${rem('height', 250)};
  margin: 1rem 0;
  background: transparent;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  text-align: center;

  &:hover {

  }

  ${media.desktop`
    flex: 0 0 28%;
  `}
`

export default Work

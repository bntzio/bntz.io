import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { rem, polyRem, media } from '../utils/styleUtils'

class Work extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'red'
  }
  transformFrame (el) {
    if (window.innerWidth > 768) {
      if (el.target.tagName === 'DIV') {
        let xAngle = 0
        let yAngle = 0
        const z = 50
        const xRel = el.clientX - el.target.offsetLeft
        const yRel = el.clientY - el.target.offsetTop
        const width = el.target.offsetWidth
        yAngle = -(0.5 - (xRel / width)) * 30
        xAngle = (0.5 - (yRel / width)) * 30
        el.target.style.transform = `perspective(525px) translateZ(${z}px) rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
        el.target.style.transition = 'none'
      }
    }
  }
  resetTransform (el) {
    if (window.innerWidth > 768) {
      if (el.target.tagName === 'DIV') {
        el.target.style.transform = 'perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)'
        el.target.style.transition = 'all 150ms linear 0s'
      }
    }
  }
  render () {
    return (
      <Container>
        <Back>
          <Link href="/">
            <Arrow />
          </Link>
        </Back>
        <Frames>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              Spoil Your Enemies
              <br/><br/>
              Send Anonymous TV Show Spoilers via SMS
            </Frame>
          </Link>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              Wipe Modules
              <br/><br/>
              A little agent that removes the node_modules folder of non-active projects
            </Frame>
          </Link>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              HexCandy
              <br/><br/>
              Delicious color tracker for designers
            </Frame>
          </Link>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              Gitsy
              <br/><br/>
              Organize your GitHub stars like a true stargazer
            </Frame>
          </Link>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              Rejection Challenges
              <br/><br/>
              Achieve your true potential by overcoming fear of rejection
            </Frame>
          </Link>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              GaryQuotes
              <br/><br/>
              Super awesome wallpapers starring the best Gary Vaynerchuk quotes
            </Frame>
          </Link>
          <Link href="/">
            <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform}>
              Phoenix
              <br/><br/>
              Send a last message to the people you love when you die
            </Frame>
          </Link>
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
  ${polyRem('padding', 35, 0)};

  ${media.desktop`
    ${polyRem('padding', 35, 25)};
  `}
`

const Arrow = styled.div`
  cursor: pointer;
  background-image: url('static/assets/icons/arrow-white-left.svg');
  ${rem('width', 22)};
  ${rem('height', 22)};
  svg {
    path, polygon, polyline, rect, line, circle {
      stroke: white;
      fill: white;
    }
  }
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
  padding: 1rem;
  cursor: pointer;
  font-family: 'Futura PT W01 Medium';

  ${media.desktop`
    flex: 0 0 28%;
  `}
`

export default Work

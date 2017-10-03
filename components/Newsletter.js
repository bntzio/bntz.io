import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import GSAP from 'react-gsap-enhancer'
import Container from './common/Container'
import Hero from './common/Hero'
import BackButton from './common/BackButton'
import { rem, media } from '../utils/styleUtils'
import { contentAnimation, heroAnimation, arrowAnimation } from '../utils/animations'

class Newsletter extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'

    const anim1 = this.addAnimation(contentAnimation)
    const anim2 = this.addAnimation(heroAnimation)
    const anim3 = this.addAnimation(arrowAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
      anim3.pause()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
      anim3.restart()
    })
    anim1.play()
  }
  render () {
    return (
      <Container>
        <ProjectNav>
          <Link href="/">
            <a><BackButton /></a>
          </Link>
        </ProjectNav>
        <Hero animated background="black" color="white">
          <Title>Join the Newsletter for Maker People</Title>
          <Subtitle>Code 👨‍💻 Design 👨‍🎨 Marketing 📈 Business 💰</Subtitle>
        </Hero>
        <div id="content">
          <Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Body>
        </div>
      </Container>
    )
  }
}

const ProjectNav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
  z-index: 99;
`

const Title = styled.h2`
  font-family: 'Frutiger LT W01_88 X Blk Cn It';
  ${rem('font-size', 28)};

  ${media.tablet`
    ${rem('font-size', 32)};
  `}
  ${media.desktop`
    ${rem('font-size', 38)};
  `}
`

const Subtitle = styled.h3`
  font-family: 'Metro Nova W01 Regular', sans-serif;
  word-spacing: 4px;
  ${rem('font-size', 16)};

  ${media.tablet`
    ${rem('font-size', 17)};
  `}
  ${media.desktop`
    ${rem('font-size', 18)};
  `}
`

const Body = styled.div`
  font-family: 'Proxima N W01 Light';
  ${rem('font-size', 20)};
  color: #555;
  line-height: 40px;
  word-spacing: .6px;
  margin: 10%;

  ${media.tablet`
    ${rem('font-size', 21)};
    ${rem('padding-top', 15)};
    ${rem('padding-bottom', 15)};
    line-height: 41px;
    margin: 5% 15%;
  `}

  ${media.desktop`
    ${rem('font-size', 22)};
    ${rem('padding-top', 25)};
    ${rem('padding-bottom', 25)};
    line-height: 42px;
    margin: 2.5% 20%;
  `}
`

export default GSAP()(Newsletter)

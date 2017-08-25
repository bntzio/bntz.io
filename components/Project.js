import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from '../components/common/BackButton'
import Container from './common/Container'
import Hero from './common/Hero'
import { darken } from 'polished'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, contentAnimation, heroAnimation, mobileNavAnimation } from '../utils/animations'

class Project extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'

    const anim1 = this.addAnimation(contentAnimation)
    const anim2 = this.addAnimation(heroAnimation)
    const anim3 = this.addAnimation(mobileNavAnimation)
    const anim4 = this.addAnimation(arrowAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
      anim3.pause()
      anim4.pause()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
      anim3.restart()
      anim4.restart()
    })
    anim1.play()
  }
  renderIcons (website, github, titleColor) {
    const sites = [{website}, {github}]
    return sites.map((site, i) => {
      if (site.website) {
        if (titleColor === 'black' || titleColor === '#000000' || titleColor === '#000') {
          return (
            <a key={i} href={site.website} target="_blank">
              <Website black />
            </a>
          )
        } else {
          return (
            <a key={i} href={site.website} target="_blank">
              <Website />
            </a>
          )
        }
      } else if (site.github) {
        if (titleColor === 'black' || titleColor === '#000000' || titleColor === '#000') {
          return (
            <a key={i} href={site.github} target="_blank">
              <Github black />
            </a>
          )
        } else {
          return (
            <a key={i} href={site.github} target="_blank">
              <Github />
            </a>
          )
        }
      }
    })
  }
  render () {
    const { title, description, body, heroColor, titleColor, website, github } = this.props

    let isBlack
    if (titleColor === 'black' || titleColor === '#000000' || titleColor === '#000') {
      isBlack = true
    }

    return (
      <Container>
        <Link href="/projects">
          <MobileProjectNav background={heroColor} color={titleColor} id="mobileNav">
            <a>👈</a>
          </MobileProjectNav>
        </Link>
        <ProjectNav>
          <Link href="/projects">
            <a>
              {isBlack ? (
                <BackButton black />
              ) : (
                <BackButton />
              )}
            </a>
          </Link>
        </ProjectNav>
        <Hero animated background={heroColor} color={titleColor}>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <IconsContainer>
            {this.renderIcons(website, github, titleColor)}
          </IconsContainer>
        </Hero>
        <div id="content">
          <Body dangerouslySetInnerHTML={{ __html: body }}></Body>
        </div>
      </Container>
    )
  }
}

const MobileProjectNav = styled.nav`
  cursor: pointer;
  z-index: 99;
  display: flex;
  justify-content: center;
  background: ${props => darken(0.04, props.background)};
  color: ${props => props.color};
  ${rem('padding-top', 14)};
  ${rem('padding-bottom', 14)};

  ${media.tablet`
    display: none;
  `}
`

const ProjectNav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
  z-index: 99;
  display: none;

  ${media.tablet`
    display: block;
  `}
`

const Title = styled.h2`
  font-family: 'Proxima Nova W01 Medium';
  text-rendering: optimizeLegibility;
  ${rem('font-size', 26)};

  ${media.tablet`
    ${rem('font-size', 28)};
  `}

  ${media.desktop`
    ${rem('font-size', 30)};
  `}
`

const Description = styled.h3`
  font-family: 'Proxima N W01 Reg';
  text-rendering: optimizeLegibility;
  ${rem('font-size', 16)};

  ${media.tablet`
    ${rem('font-size', 18)};
  `}

  ${media.desktop`
    ${rem('font-size', 20)};
  `}
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  ${rem('margin-top', 16)};
  ${rem('margin-bottom', 16)};
`

const Website = styled.div`
  cursor: pointer;
  background-image: ${props => props.black ? "url('/static/assets/icons/globe-black.svg')" : "url('/static/assets/icons/globe-white.svg')"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${rem('width', 22)};
  ${rem('height', 22)};
  ${rem('margin-left', 8)};
  ${rem('margin-right', 8)};
`

const Github = styled.div`
  cursor: pointer;
  background-image: ${props => props.black ? "url('/static/assets/icons/github-black.svg')" : "url('/static/assets/icons/github-white.svg')"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${rem('width', 22)};
  ${rem('height', 22)};
  ${rem('margin-left', 8)};
  ${rem('margin-right', 8)};
`

const Body = styled.div`
  font-family: 'Proxima N W01 Thin Reg';
  text-rendering: optimizeLegibility;
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
    margin: 0 15%;
  `}

  ${media.desktop`
    ${rem('font-size', 22)};
    ${rem('padding-top', 25)};
    ${rem('padding-bottom', 25)};
    line-height: 42px;
    margin: 0 20%;
  `}
`

export default GSAP()(Project)

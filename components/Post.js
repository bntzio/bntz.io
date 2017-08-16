import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, Power0, Back } from 'gsap'
import BackButton from '../components/common/BackButton'
import { rem, media } from '../utils/styleUtils'

class Post extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    const $ = window.jQuery
    body.style.backgroundColor = 'white'
    $('p').selectionSharer()

    const anim1 = this.addAnimation(this.contentAnimation)
    const anim2 = this.addAnimation(this.arrowAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
    })
    anim1.play()
  }
  contentAnimation () {
    const content = document.getElementById('content')
    return new TimelineMax().from(content, 0.3, {
      y: 50,
      autoAlpha: 0,
      ease: Power0.easeIn
    })
  }
  arrowAnimation () {
    const el = document.getElementById('arrow')
    return new TimelineMax().fromTo(el, 0.6, {
      x: 50,
      autoAlpha: 0
    }, {
      x: 0,
      autoAlpha: 1,
      ease: Back.easeInOut.config(2)
    })
  }
  render () {
    const { title, body } = this.props

    return (
      <Container>
        <MiniNav>
          <Link href="/blog">
            <a><BackButton black /></a>
          </Link>
        </MiniNav>
        <div id="content">
          <Title>{title}</Title>
          <Body dangerouslySetInnerHTML={{ __html: body }}></Body>
        </div>
      </Container>
    )
  }
}

const Container = styled.section`
  margin: 0 2.5%;
  color: rgba(0, 0, 0, 0.8);

  ${media.tablet`
    margin: 0 5%;
  `}

  ${media.desktop`
    margin: 0 15%;
  `}

  ${media.largeDesktop`
    margin: 0 20%;
  `}
`

const MiniNav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
`

const Title = styled.h2`
  font-family: 'KievitWeb W03 Bold';
  ${rem('font-size', 32)};
  ${rem('margin-top', 100)};

  ${media.desktop`
    ${rem('margin-top', 50)};
  `}

  &::selection {
    background: yellow;
  }
`

const Body = styled.div`
 font-family: 'Charter ITC W01';
 line-height: 36px;
 word-spacing: .5px;
 font-size: 22px;

 & * {
   &::selection {
     background: yellow;
   }
 }
`

export default GSAP()(Post)

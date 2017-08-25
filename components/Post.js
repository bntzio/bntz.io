import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from '../components/common/BackButton'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, contentAnimation } from '../utils/animations'

class Post extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    const $ = window.jQuery
    body.style.backgroundColor = 'white'
    $('p').selectionSharer()

    const anim1 = this.addAnimation(contentAnimation)
    const anim2 = this.addAnimation(arrowAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
    })
    anim1.play()
  }
  render () {
    const { title, body } = this.props

    return (
      <PostContainer>
        <PostNav>
          <Link href="/blog">
            <a><BackButton black /></a>
          </Link>
        </PostNav>
        <div id="content">
          <Title>{title}</Title>
          <Body dangerouslySetInnerHTML={{ __html: body }}></Body>
        </div>
      </PostContainer>
    )
  }
}

const PostContainer = styled.section`
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

const PostNav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
`

const Title = styled.h2`
  font-family: 'KievitWeb W03 Bold';
  text-rendering: optimizeLegibility;
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
 text-rendering: optimizeLegibility;
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

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from '../components/common/BackButton'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, contentAnimation } from '../utils/animations'

class Book extends React.Component {
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
  renderRating (rating) {
    return `How strongly I recommend it: ${rating}/10`
  }
  render () {
    const { title, body, author, rating } = this.props

    return (
      <PostContainer>
        <PostNav>
          <Link href="/books">
            <a><BackButton black /></a>
          </Link>
        </PostNav>
        <div id="content">
          <Title>{`${title} - by ${author}`}</Title>
          <Rating>{this.renderRating(rating)}</Rating>
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
    margin: 0 25%;
  `}
`

const PostNav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
`

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  ${rem('font-size', 32)};
  ${rem('margin-top', 100)};

  ${media.desktop`
    ${rem('margin-top', 50)};
  `}

  &::selection {
    background: #fbe100;
  }
`

const Rating = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #777;
  ${rem('font-size', 14)};

  &::selection {
    background: #fbe100;
  }
`

const Body = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  line-height: 2rem;
  word-spacing: .2px;
  ${rem('font-size', 16)};

  & * {
    &::selection {
      background: #fbe100;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  }

  a {
    color: rgba(0, 0, 0, 0.8);
    transition: .6s ease all;
    text-decoration: none;
    border: 2px solid #fbe100;
  }

  img {
    display: block;
    margin: 0 auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    width: 270px;
    height: auto;

    ${media.tablet`
      width: 360px;
    `}
    ${media.desktop`
      width: 420px;
    `}
    ${media.largeDesktop`
      width: 540px;
    `}
  }
`

export default GSAP()(Book)

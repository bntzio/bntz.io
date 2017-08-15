import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Back from '../components/common/Back'
import { rem, media } from '../utils/styleUtils'

class Post extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    const $ = window.jQuery
    body.style.backgroundColor = 'white'
    $('p').selectionSharer()
  }

  render () {
    const { title, body } = this.props

    return (
      <Container>
        <MiniNav>
          <Link href="/blog">
            <a><Back black /></a>
          </Link>
        </MiniNav>
        <Title>{title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: body }}></Body>
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

export default Post

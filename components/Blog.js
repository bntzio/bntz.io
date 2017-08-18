import React from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import uuid from 'uuid/v4'
import BackButton from './common/BackButton'
import Container from './common/Container'
import { Link } from '../routes'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, titleAnimation, postsAnimation } from '../utils/animations'

class Blog extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'blue'

    const anim1 = this.addAnimation(postsAnimation)
    const anim2 = this.addAnimation(arrowAnimation)
    const anim3 = this.addAnimation(titleAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
      anim3.play()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
    })
    anim1.play()
  }
  renderPosts () {
    const { posts } = this.props
    return posts.map(post => {
      return (
        <PostItem key={uuid()} className="post">
          <h2>
            <Link route="post" params={{ slug: post.slug }}>
              <a>{post.title}</a>
            </Link>
          </h2>
        </PostItem>
      )
    })
  }
  render () {
    return (
      <Container>
        <BlogNav>
          <Link route="index">
            <a><BackButton /></a>
          </Link>
          <Title id="title">Articles</Title>
        </BlogNav>
        {this.renderPosts()}
      </Container>
    )
  }
}

const BlogNav = styled.nav`
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  font-family: 'Proxima N W01 Bold';
  ${rem('font-size', 20)};
`

const PostItem = styled.div`
  ${rem('margin-bottom', -8)};

  ${media.desktop`
    ${rem('margin-left', 33)};
    ${rem('margin-right', 33)};
    ${rem('margin-bottom', -16)};
  `}

  h2 {
    font-family: 'Proxima N W01 Smbd';
    font-size: 20px;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        cursor: default;
        border-bottom: 3px solid white;
      }
    }
  }
`

export default GSAP()(Blog)

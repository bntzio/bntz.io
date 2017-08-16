import React from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, Power0, Back } from 'gsap'
import uuid from 'uuid/v4'
import BackButton from './common/BackButton'
import { Link } from '../routes'
import { rem, media } from '../utils/styleUtils'

class Blog extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'blue'

    const anim1 = this.addAnimation(this.postsAnimation)
    const anim2 = this.addAnimation(this.arrowAnimation)
    anim1.eventCallback('onStart', () => {
      anim2.pause()
    })
    anim1.eventCallback('onComplete', () => {
      anim2.restart()
    })
    anim1.play()
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
  postsAnimation () {
    const posts = document.getElementsByClassName('post')
    return new TimelineMax().staggerFrom(posts, 0.3, {
      y: 50,
      autoAlpha: 0,
      ease: Power0.easeNone
    }, 0.2)
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
        <Link route="index">
          <a><BackButton /></a>
        </Link>
        {this.renderPosts()}
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

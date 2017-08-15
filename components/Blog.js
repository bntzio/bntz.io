import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'
import Back from './common/Back'
import { Link } from '../routes'
import { rem, media } from '../utils/styleUtils'

class Blog extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'blue'
  }
  renderPosts () {
    const { posts } = this.props
    return posts.map(post => {
      return (
        <PostItem key={uuid()}>
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
          <a><Back /></a>
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

export default Blog

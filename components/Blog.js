import React from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from './common/BackButton'
import h from '../utils/helpers'
import { Link } from '../routes'
import { arrowAnimation, postsAnimation } from '../utils/animations'

class Blog extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'

    const anim1 = this.addAnimation(postsAnimation)
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
    const { posts } = this.props

    return (
      <BlogContainer>
        <BlogNav>
          <Link route="index">
            <a><BackButton black /></a>
          </Link>
        </BlogNav>
        <BlogPosts id="blog-posts">
          <Category>Code 👨‍💻</Category>
          {h.renderBlogItems(posts, 'code')}

          <Category>Business 💰</Category>
          {h.renderBlogItems(posts, 'business')}

          {/* <Category>Marketing 📈</Category>
          {h.renderBlogItems(posts, 'marketing')} */}

          {/* <Category>Design 👨‍🎨</Category>
          {h.renderBlogItems(posts, 'design')} */}

          <Category>Life 🌲</Category>
          {h.renderBlogItems(posts, 'life')}

          {/* <Category>Random 🤔</Category>
          {h.renderBlogItems(posts, 'random')} */}
        </BlogPosts>
      </BlogContainer>
    )
  }
}

const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
`

const BlogNav = styled.nav`
  display: flex;
  align-self: flex-start;
`

const BlogPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Category = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
`

export default GSAP()(Blog)

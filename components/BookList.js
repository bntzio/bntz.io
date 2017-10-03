import React from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from './common/BackButton'
import Container from './common/Container'
import h from '../utils/helpers'
import { Link } from '../routes'
import { rem } from '../utils/styleUtils'
import { arrowAnimation, titleAnimation, booksAnimation } from '../utils/animations'

class BookList extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#fbe100'

    const anim1 = this.addAnimation(booksAnimation)
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
  render () {
    const { books } = this.props

    return (
      <Container>
        <BlogNav>
          <Link route="about">
            <a><BackButton black /></a>
          </Link>
          <Title id="title">Book Reads</Title>
        </BlogNav>
        {h.renderBookItems(books)}
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
  color: black;
  ${rem('font-size', 20)};
`

export default GSAP()(BookList)

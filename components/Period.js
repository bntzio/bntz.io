import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from '../components/common/BackButton'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, contentAnimation } from '../utils/animations'

class Period extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'

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
      <PeriodContainer>
        <PeriodNav>
          <Link href="/">
            <a><BackButton black /></a>
          </Link>
        </PeriodNav>
        <div id="content">
          <Title>{title}</Title>
          <Body dangerouslySetInnerHTML={{ __html: body }}></Body>
        </div>
      </PeriodContainer>
    )
  }
}

const PeriodContainer = styled.section`
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

const PeriodNav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
`

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-rendering: optimizeLegibility;
  ${rem('font-size', 22)};
  ${rem('margin-top', 100)};

  ${media.desktop`
    ${rem('margin-top', 50)};
  `}

  &::selection {
    background: #79FFE1;
  }
`

const Body = styled.div`
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
 text-rendering: optimizeLegibility;
 line-height: 28px;
 word-spacing: 1px;
 ${rem('font-size', 16)};

 & * {
   &::selection {
     background: #79FFE1;
   }
 }
`

export default GSAP()(Period)

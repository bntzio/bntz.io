import React from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from './common/BackButton'
import Container from './common/Container'
import h from '../utils/helpers'
import { Link } from '../routes'
import { rem } from '../utils/styleUtils'
import { arrowAnimation, titleAnimation, periodsAnimation } from '../utils/animations'

class Now extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#222222'

    const anim1 = this.addAnimation(periodsAnimation)
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
    const { nows } = this.props
    const title = 'What I\'ve been into'

    return (
      <Container>
        <NowNav>
          <Link route="index">
            <a><BackButton /></a>
          </Link>
          <Title id="title">{title}</Title>
        </NowNav>
        {h.renderNows(nows, 'period')}
      </Container>
    )
  }
}

const NowNav = styled.nav`
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  font-family: 'Proxima N W01 Bold';
  ${rem('font-size', 20)};
`

export default GSAP()(Now)

import React from 'react'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import BackButton from '../components/common/BackButton'
import h from '../utils/helpers'
import { Link } from '../routes'
import { rem } from '../utils/styleUtils'
import { arrowAnimation, titleAnimation, entriesAnimation } from '../utils/animations'

class Journal extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'white'

    const anim1 = this.addAnimation(entriesAnimation)
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
    const { entries } = this.props

    return (
      <JournalContainer>
        <JournalNav>
          <Link route="index">
            <a><BackButton black /></a>
          </Link>
          <Title id="title">Daily Journal</Title>
        </JournalNav>
        {h.renderJournalItems(entries)}
      </JournalContainer>
    )
  }
}

const JournalContainer = styled.main`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  height: 100%;
`

const JournalNav = styled.nav`
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  font-family: 'Proxima N W01 Bold';
  ${rem('font-size', 20)};
`

export default GSAP()(Journal)

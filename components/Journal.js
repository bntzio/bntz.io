import React from 'react'
import GSAP from 'react-gsap-enhancer'
import h from '../utils/helpers'
import Container from './common/Container'
import MiniNav from './common/MiniNav'
import { arrowAnimation, titleAnimation, entriesAnimation } from '../utils/animations'

class Journal extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#222222'

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
      <Container>
        <MiniNav url="/" title="Daily Journal" />
        {h.renderListItems(entries, 'entry')}
      </Container>
    )
  }
}

export default GSAP()(Journal)

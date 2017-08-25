import React from 'react'
import Link from 'next/link'
import GSAP from 'react-gsap-enhancer'
import md from 'react-markings'
import SimpleContainer from './common/SimpleContainer'
import MarkdownWrapper from './common/MarkdownWrapper'
import SimpleNav from './common/SimpleNav'
import BackButton from '../components/common/BackButton'
import { arrowAnimation, contentAnimation } from '../utils/animations'

class About extends React.Component {
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
    return (
      <SimpleContainer>
        <SimpleNav>
          <Link href="/">
            <a><BackButton black /></a>
          </Link>
        </SimpleNav>
        <div id="content">
          <MarkdownWrapper color="rgba(0, 0, 0, 0.8)" highlightColor="#ff3b6b" selectionColor="#ffffff">
            {
              md`
                # Hi there 👋
                ### I'm a self-taught full-stack developer and maker 👨‍💻

                My name is Enrique, and I'm a full-stack developer focusing on building great looking apps.
              `
            }
          </MarkdownWrapper>
        </div>
      </SimpleContainer>
    )
  }
}

export default GSAP()(About)

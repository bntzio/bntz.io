import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, Power0, Back } from 'gsap'
import { rem, media } from '../utils/styleUtils'

class Project extends React.Component {
  componentDidMount () {
    const anim1 = this.addAnimation(this.framesAnimation)
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
  framesAnimation () {
    const projects = document.getElementsByClassName('project')
    const arrow = document.getElementById('arrow')
    const tween = new TimelineMax().set(arrow, { autoAlpha: 0 }).staggerFromTo(projects, 0.3, {
      autoAlpha: 0,
      ease: Power0.easeNone
    }, { autoAlpha: 1, ease: Power0.easeNone }, 0.1)
    return tween
  }
  transformFrame (el) {
    if (window.innerWidth > 768) {
      if (el.target.tagName === 'DIV') {
        let xAngle = 0
        let yAngle = 0
        const z = 50
        const xRel = el.clientX - el.target.offsetLeft
        const yRel = el.clientY - el.target.offsetTop
        const width = el.target.offsetWidth
        yAngle = -(0.5 - (xRel / width)) * 30
        xAngle = (0.5 - (yRel / width)) * 30
        el.target.style.transform = `perspective(525px) translateZ(${z}px) rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
        el.target.style.transition = 'none'
      }
    }
  }
  resetTransform (el) {
    if (window.innerWidth > 768) {
      if (el.target.tagName === 'DIV') {
        el.target.style.transform = 'perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)'
        el.target.style.transition = 'all 200ms linear 0s'
      }
    }
  }
  render () {
    const { name, description, url } = this.props

    return (
      <Link href={url}>
        <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform} className="project">
          {name}
          <br/><br/>
          {description}
        </Frame>
      </Link>
    )
  }
}

const Frame = styled.div`
  display: flex;
  flex: 0 0 100%;
  ${rem('height', 250)};
  margin: 1rem 0;
  background: transparent;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  text-align: center;
  padding: 1rem;
  cursor: crosshair;
  font-family: 'Proxima N W01 Smbd';

  ${media.desktop`
    flex: 0 0 28%;
  `}
`

export default GSAP()(Project)

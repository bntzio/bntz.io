import React from 'react'
import { Link } from '../routes'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, titleAnimation, framesAnimation } from '../utils/animations'

class WorkFrame extends React.Component {
  componentDidMount () {
    const anim1 = this.addAnimation(framesAnimation)
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
    const { title, description, classname, route, slug, borderColor } = this.props

    return (
      <Link route={route} params={{ slug }}>
        <Frame onMouseMove={this.transformFrame} onMouseLeave={this.resetTransform} className={classname} borderColor={borderColor}>
          {title}
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

  &:hover {
    border-color: ${props => props.borderColor};
  }

  ${media.desktop`
    flex: 0 0 28%;
  `}
`

export default GSAP()(WorkFrame)

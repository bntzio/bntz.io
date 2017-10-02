import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GSAP from 'react-gsap-enhancer'
import SimpleContainer from './common/SimpleContainer'
import SimpleNav from './common/SimpleNav'
import SimpleTitle from './common/SimpleTitle'
import SimpleBody from './common/SimpleBody'
import BackButton from '../components/common/BackButton'
import { rem } from '../utils/styleUtils'
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
    const { title, body, date } = this.props
    const colors = {
      color: 'rgba(0, 0, 0, 0.8)',
      highlightColor: '#79FFE1'
    }

    return (
      <SimpleContainer>
        <SimpleNav>
          <Link href="/">
            <a><BackButton black /></a>
          </Link>
        </SimpleNav>
        <div id="content">
          <SimpleTitle title={title} color={colors.color} highlightColor={colors.highlightColor} />
          <Timestamp>{date}</Timestamp>
          <SimpleBody body={body} color={colors.color} highlightColor={colors.highlightColor} />
        </div>
      </SimpleContainer>
    )
  }
}

const Timestamp = styled.time`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
  color: #777;
  ${rem('font-size', 14)};

  &::selection {
    background: #79FFE1;
  }
`

export default GSAP()(Period)

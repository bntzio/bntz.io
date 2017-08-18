import React from 'react'
import GSAP from 'react-gsap-enhancer'
import styled from 'styled-components'
import { Link } from '../routes'
import uuid from 'uuid/v4'
import Container from './common/Container'
import MiniNav from './common/MiniNav'
import { rem, media } from '../utils/styleUtils'
import { arrowAnimation, titleAnimation, entriesAnimation } from '../utils/animations'

class Journal extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#89e051'

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
  renderEntries () {
    const { entries } = this.props
    return entries.map(entry => {
      return (
        <EntryItem key={uuid()} className="entry">
          <h2>
            <Link route="entry" params={{ slug: entry.slug }}>
              <a>{entry.title}</a>
            </Link>
          </h2>
        </EntryItem>
      )
    })
  }
  render () {
    return (
      <Container>
        <MiniNav url="/" title="Daily Journal" />
        {this.renderEntries()}
      </Container>
    )
  }
}

const EntryItem = styled.div`
  ${rem('margin-bottom', -8)};

  ${media.desktop`
    ${rem('margin-left', 33)};
    ${rem('margin-right', 33)};
    ${rem('margin-bottom', -16)};
  `}

  h2 {
    font-family: 'Proxima N W01 Smbd';
    font-size: 20px;

    a {
      color: white;
      text-decoration: none;

      &:hover {
        cursor: default;
        border-bottom: 3px solid white;
      }
    }
  }
`

export default GSAP()(Journal)

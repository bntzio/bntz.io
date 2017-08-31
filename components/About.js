import React from 'react'
import Link from 'next/link'
import GSAP from 'react-gsap-enhancer'
import styled from 'styled-components'
import SimpleContainer from './common/SimpleContainer'
import MarkdownWrapper from './common/MarkdownWrapper'
import SimpleNav from './common/SimpleNav'
import BackButton from '../components/common/BackButton'
import { arrowAnimation, contentAnimation } from '../utils/animations'
import { rem, media } from '../utils/styleUtils'

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
            <Title>Hi there 👋</Title>
            <Subtitle>I&#39;m a self-taught full-stack developer and maker 👨‍💻</Subtitle>
            <Body>
              <Paragraph>My name is Enrique, and I&#39;m a full-stack developer focusing on building great looking apps.</Paragraph>
              <Paragraph>First of all, welcome to my digital home, I built this site to share my thoughts on various topics, ranging from code to business and from productivity to life in general.</Paragraph>
              <Paragraph>Now, let me introduce myself a little bit...</Paragraph>
              <PhotoContainer>
                <Photo />
                <PhotoDescription><Emoji /> Yep, this is me, I&#39;m a 22 years old guy that spends its time learning new things, I love to learn and teach what I know. I consider myself a knowledge worker.</PhotoDescription>
              </PhotoContainer>
              <Paragraph>I currently live in Mexico. You can find me on my computer coding almost all day, every day. Building products from scratch is my passion, and I really enjoy learning and working with new emerging technologies.</Paragraph>
              <Paragraph>Apart from coding and making stuff, I like reading and writing, bodybuilding and traveling.</Paragraph>
              <Paragraph>If you like reading too, you may find very useful <Link href="/"><a>my book reviews</a></Link>.</Paragraph>
              <Paragraph>Other interesting links are: <Link href="/"><a>tools I use</a></Link> and <Link href="/"><a>lessons learned</a></Link>.</Paragraph>
              <Paragraph>You can find me on <a href="https://twitter.com/bntzio" target="_blank">Twitter</a> or <a href="https://Instagram.com/bntzio" target="_blank">Instagram</a>.</Paragraph>
              <Paragraph>Cheers 🙂</Paragraph>
            </Body>
          </MarkdownWrapper>
        </div>
      </SimpleContainer>
    )
  }
}

const Title = styled.h1``

const Subtitle = styled.h3``

const Body = styled.div``

const Paragraph = styled.p``

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    flex-direction: row;
  `}
`

const Photo = styled.div`
  background: url('/static/assets/images/profile.jpg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  ${rem('width', 120)};
  ${rem('height', 120)};

  ${media.tablet`
    max-width: 40%;
  `}

  ${media.desktop`
    max-width: 30%;
  `}
`

const PhotoDescription = styled.p`
  max-width: 100%;
  color: #888;
  font-style: italic;
  ${rem('font-size', 14)};

  ${media.tablet`
    max-width: 60%;
  `}

  ${media.desktop`
    max-width: 70%;
  `}
`

const Emoji = styled.span`
  &:before {
    content: '👆';

    ${media.tablet`
      content: '👈';
    `}
  }
`

export default GSAP()(About)

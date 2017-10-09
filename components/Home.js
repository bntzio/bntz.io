import React from 'react'
import Link from 'next/link'
import { Link as RouteLink } from '../routes'
import { TweenMax, Power0 } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import styled from 'styled-components'
import { polyRem, rem, media } from '../utils/styleUtils'
import { getLastPeriod } from '../utils/content'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = { more: false, moreMsg1: 'want more?', moreMsg2: 'really?' }
    this.showMoreLinks = this.showMoreLinks.bind(this)
    this.changeBackground = this.changeBackground.bind(this)
  }
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = '#222222'
  }
  changeBackground (el) {
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    switch (el) {
      case 'work':
        line1.innerHTML = 'work work'
        line2.innerHTML = 'more work'
        break
      case 'blog':
        line1.innerHTML = 'my essays'
        line2.innerHTML = 'and stuff'
        break
      case 'more':
        line1.innerHTML = `${this.state.moreMsg1}`
        line2.innerHTML = `${this.state.moreMsg2}`
        break
      case 'experiments':
        line1.innerHTML = 'my crazy'
        line2.innerHTML = 'ideas'
        break
      case 'journal':
        line1.innerHTML = 'writing'
        line2.innerHTML = 'down'
        break
      case 'now':
        line1.innerHTML = 'what im'
        line2.innerHTML = 'doing now'
        break
      case 'newsletter':
        line1.innerHTML = 'wanna'
        line2.innerHTML = 'join?'
        break
      case 'life':
        line1.innerHTML = 'life'
        line2.innerHTML = 'logging'
        break
      case 'courses':
        line1.innerHTML = 'future'
        line2.innerHTML = 'makers'
        break
      case 'about':
        line1.innerHTML = 'get to'
        line2.innerHTML = 'know me'
        break
      default:
        line1.innerHTML = 'Digital'
        line2.innerHTML = 'Maker'
        return
    }
  }

  showMoreLinks ({ target }) {
    const words = document.getElementById('poster').children
    const letters = document.getElementById('more').children
    const tween = TweenMax.to(words, 0.6, {
      ease: Power0.easeNone,
      onStart: () => {
        this.setState({ more: !this.state.more })
        this.setState({ moreMsg1: this.state.more ? 'too much?' : 'want more?', moreMsg2: this.state.more ? 'told ya' : 'really?' })
        TweenMax.staggerTo(letters, 0.2, {
          autoAlpha: 0,
          ease: Power0.easeNone,
          y: 50
        }, 0.1)
      },
      onComplete: () => {
        Object.keys(letters).map((key) => {
          switch (key) {
            case '0':
              this.state.more ? letters[key].innerHTML = 'l' : letters[key].innerHTML = 'm'
              break
            case '1':
              this.state.more ? letters[key].innerHTML = 'e' : letters[key].innerHTML = 'o'
              break
            case '2':
              this.state.more ? letters[key].innerHTML = 's' : letters[key].innerHTML = 'r'
              break
            case '3':
              this.state.more ? letters[key].innerHTML = 's' : letters[key].innerHTML = 'e'
              break
            default:
              return
          }
        })
        TweenMax.staggerTo(letters, 0.2, {
          autoAlpha: 1,
          ease: Power0.easeNone,
          y: 0,
          display: 'inline'
        }, 0.1, this.showOrHideLinks())
      }
    })
    return tween
  }

  showOrHideLinks () {
    if (this.state.more) {
      TweenMax.to('#menu', 0.4, {
        scale: 0.4,
        ease: Power0.easeNone,
        onStart: () => {
          TweenMax.to('.links', 1, {
            ease: Power0.easeNone,
            display: 'block',
            scale: 1
          })
        }
      })
    } else {
      TweenMax.to('.links', 0.1, {
        ease: Power0.easeNone,
        display: 'none',
        scale: 0
      })
    }
  }

  handleShowMoreLinks () {
    this.addAnimation(this.showMoreLinks)
  }

  render () {
    const lastPeriod = getLastPeriod()

    return (
      <HomeContainer>
        <Logo />
        <HiddenLogo>Enrique Benitez</HiddenLogo>
        <Content>
          <Poster id="poster">
            <Word id="line1">Digital</Word>
            <Word id="line2">Maker</Word>
          </Poster>
          <Menu id="menu">
            <Item>
              <Link href="/projects"><StyledLink><h3 onMouseOver={() => this.changeBackground('work')} onMouseLeave={this.changeBackground}>work</h3></StyledLink></Link>
            </Item>
            <Item>
              <Link href="/blog"><StyledLink><h3 onMouseOver={() => this.changeBackground('blog')} onMouseLeave={this.changeBackground}>blog</h3></StyledLink></Link>
            </Item>
            <Item>
              <StyledLink>
                <h3 id="more" onClick={() => this.handleShowMoreLinks()} onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>
                  <span>m</span><span>o</span><span>r</span><span>e</span>
                </h3>
              </StyledLink>
            </Item>
            {/* <Item className="links">
              <Link href="/experiments"><StyledLink><h3 onMouseOver={() => this.changeBackground('experiments')} onMouseLeave={this.changeBackground}>Experiments</h3></StyledLink></Link>
            </Item> */}
            <Item className="links">
              <Link href="/journal"><StyledLink><h3 onMouseOver={() => this.changeBackground('journal')} onMouseLeave={this.changeBackground}>Journal</h3></StyledLink></Link>
            </Item>
            <Item className="links">
              <RouteLink route="period" params={{ slug: lastPeriod }}><StyledLink><h3 onMouseOver={() => this.changeBackground('now')} onMouseLeave={this.changeBackground}>Now</h3></StyledLink></RouteLink>
            </Item>
            {/* <Item className="links">
              <Link href="/life"><StyledLink><h3 onMouseOver={() => this.changeBackground('life')} onMouseLeave={this.changeBackground}>Life</h3></StyledLink></Link>
            </Item> */}
            <Item className="links">
              <Link href="/newsletter"><StyledLink><h3 onMouseOver={() => this.changeBackground('newsletter')} onMouseLeave={this.changeBackground}>Newsletter</h3></StyledLink></Link>
            </Item>
            {/* <Item className="links">
              <Link href="/courses"><StyledLink><h3 onMouseOver={() => this.changeBackground('courses')} onMouseLeave={this.changeBackground}>Courses</h3></StyledLink></Link>
            </Item> */}
            <Item className="links">
              <Link href="/about"><StyledLink><h3 onMouseOver={() => this.changeBackground('about')} onMouseLeave={this.changeBackground}>About</h3></StyledLink></Link>
            </Item>
          </Menu>
        </Content>
      </HomeContainer>
    )
  }
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Logo = styled.div`
  display: block;
  margin: 0 auto;
  background-image: url('static/brand.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 250px;
  height: 50px;
`

const HiddenLogo = styled.h1`
  font-size: .5px;
  color: transparent;
`

const Content = styled.div`
  ${rem('margin-top', 24)};
  ${rem('margin-bottom', 32)};
  position: relative;
  display: flex;
  width: 100%;

  ${media.largeDesktop`
    ${rem('margin-top', 64)};
  `}
`

const Poster = styled.div`
  width: 100%;
  display: none;
  position: relative;

  ${media.largeDesktop`
    display: block;
  `}
`

const Word = styled.h2`
  color: #111;
  text-transform: uppercase;
  margin: 0;
  font-family: 'Frutiger LT W01_88 X Blk Cn It';
  ${rem('font-size', 160)};
`

const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${media.largeDesktop`
    flex-direction: row;
    justify-content: space-around;
  `}
`

const Item = styled.div`
  align-self: center;
`

const StyledLink = styled.a`
  display: inline-block;

  h3 {
    ${polyRem('padding', 8, 32)};
    ${polyRem('margin', 32, 0)};
    ${rem('font-size', 48)};
    font-family: 'Frutiger LT W01_88 X Blk Cn It';
    color: white;
    text-transform: uppercase;
    text-align: center;

    ${media.largeDesktop`
      ${rem('font-size', 64)};
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
    `}

    &:hover {
      cursor: pointer;
    }

    span {
      display: inline-block;
    }
  }
`

export default GSAP()(Home)

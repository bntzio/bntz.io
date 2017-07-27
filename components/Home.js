import React from 'react'
import { TweenMax, Power0 } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import styled from 'styled-components'
import { polyRem, rem, media } from '../utils/styleUtils'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = { more: false, moreMsg1: 'want more?', moreMsg2: 'really?' }
    this.showMoreLinks = this.showMoreLinks.bind(this)
    this.changeBackground = this.changeBackground.bind(this)
  }
  changeBackground (el) {
    const body = document.querySelector('body')
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    if (el === 'work') {
      body.style.backgroundColor = 'red'
      line1.innerHTML = 'work work'
      line2.innerHTML = 'more work'
    } else if (el === 'blog') {
      body.style.backgroundColor = 'blue'
      line1.innerHTML = 'my essays'
      line2.innerHTML = 'and stuff'
    } else if (el === 'more') {
      body.style.backgroundColor = 'orange'
      line1.innerHTML = `${this.state.moreMsg1}`
      line2.innerHTML = `${this.state.moreMsg2}`
    } else {
      body.style.backgroundColor = '#222'
      line1.innerHTML = 'Digital'
      line2.innerHTML = 'Maker'
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
              <Link><h3 onMouseOver={() => this.changeBackground('work')} onMouseLeave={this.changeBackground}>work</h3></Link>
            </Item>
            <Item>
              <Link><h3 onMouseOver={() => this.changeBackground('blog')} onMouseLeave={this.changeBackground}>blog</h3></Link>
            </Item>
            <Item>
              <Link>
                <h3 id="more" onClick={() => this.handleShowMoreLinks()} onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>
                  <span>m</span><span>o</span><span>r</span><span>e</span>
                </h3>
              </Link>
            </Item>
            <Item className="links">
              <Link><h3 onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>Experiments</h3></Link>
            </Item>
            <Item className="links">
              <Link><h3 onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>Journal</h3></Link>
            </Item>
            <Item className="links">
              <Link><h3 onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>Now</h3></Link>
            </Item>
            <Item className="links">
              <Link><h3 onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>Newsletter</h3></Link>
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
  ${rem('margin-top', 32)};
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
  font-style: italic;
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

const Link = styled.a`
  display: inline-block;

  h3 {
    ${polyRem('padding', 8, 32)};
    ${polyRem('margin', 32, 0)};
    ${rem('font-size', 64)};
    font-family: 'Frutiger LT W01_88 X Blk Cn It';
    color: white;
    font-style: italic;
    text-transform: uppercase;
    text-align: center;

    &:hover {
      cursor: pointer;
    }

    span {
      display: inline-block;
    }
  }
`
export default GSAP()(Home)

import React from 'react'
import styled from 'styled-components'
import { polyRem, rem, media } from '../utils/styleUtils'

export default class extends React.Component {
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
      line1.innerHTML = 'want more?'
      line2.innerHTML = 'really?'
    } else {
      body.style.backgroundColor = '#222'
      line1.innerHTML = 'Digital'
      line2.innerHTML = 'Maker'
    }
  }
  render () {
    return (
      <HomeContainer>
        <Logo />
        <HiddenLogo>Enrique Benitez</HiddenLogo>
        <Content>
          <Poster>
            <Word id="line1">Digital</Word>
            <Word id="line2">Maker</Word>
          </Poster>
          <Menu>
            <Item>
              <Link><h3 onMouseOver={() => this.changeBackground('work')} onMouseLeave={this.changeBackground}>work</h3></Link>
            </Item>
            <Item>
              <Link><h3 onMouseOver={() => this.changeBackground('blog')} onMouseLeave={this.changeBackground}>blog</h3></Link>
            </Item>
            <Item>
              <Link><h3 onMouseOver={() => this.changeBackground('more')} onMouseLeave={this.changeBackground}>more</h3></Link>
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

  ${ media.largeDesktop`
    ${rem('margin-top', 64)};
  ` }
`

const Poster = styled.div`
  width: 100%;
  display: none;
  position: relative;

  ${ media.largeDesktop`
    display: block;
  ` }
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

  ${ media.largeDesktop`
    flex-direction: row;
    justify-content: space-around;
  ` }
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
  }
`

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Parallax from 'parallax-js'
import { disableBodyScroll } from 'body-scroll-lock'

import Home from './../components/Home'
import Wave from './../components/Wave'
import Texture from './../components/Texture'

export default () => {
  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallax = new Parallax(scene)
    parallax.friction(0.1, 0.3)
    disableBodyScroll(scene)
  }, [])

  return (
    <Main>
      <Scene id='scene'>
        <Content data-depth='0.15'>
          <Texture />
          <Home />
        </Content>
      </Scene>
      <Footer>
        <Wave />
      </Footer>
    </Main>
  )
}

const Main = styled.main``
const Scene = styled.section``
const Content = styled.div``

const Footer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Parallax from 'parallax-js'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
/** custom imports */
import Layout from 'layouts'
import Head from 'heads'
import GlobalStyles from 'styles/global'
import Home from 'components/Home'
import Header from 'components/Header'
import Wave from 'components/Wave'
import Texture from 'components/Texture'

export default () => {
  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallax = new Parallax(scene)
    parallax.friction(0.1, 0.3)
    disableBodyScroll(scene)

    return () => {
      enableBodyScroll(scene)
    }
  }, [])

  return (
    <>
      <Head />
      <GlobalStyles />
      <main>
        <Scene id='scene'>
          <Content data-depth='0.15'>
            <Texture />
            <Layout>
              <Home />
            </Layout>
          </Content>
        </Scene>
        <Top>
          <Header />
        </Top>
        <Footer>
          <Wave />
        </Footer>
      </main>
    </>
  )
}

const Scene = styled.section``
const Content = styled.div``

const Top = styled.div`
  position: absolute;
  top: 6rem;
  left: 6rem;
  right: 7.5rem;
`

const Footer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

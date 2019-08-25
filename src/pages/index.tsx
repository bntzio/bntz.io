import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Parallax from 'parallax-js'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
/** custom imports */
// @ts-ignore
import Layout from 'layouts'
// @ts-ignore
import Head from 'heads'
// @ts-ignore
import GlobalStyles from 'styles/global'
// @ts-ignore
import Home from 'components/Home'
// @ts-ignore
import Header from 'components/Header'
// @ts-ignore
import Wave from 'components/Wave'
// @ts-ignore
import Texture from 'components/Texture'

export default () => {
  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallax = new Parallax(scene)
    parallax.friction(0.1, 0.3)
    disableBodyScroll(scene as any)

    return () => {
      enableBodyScroll(scene as any)
    }
  }, [])

  return (
    <>
      <Head />
      <Global styles={GlobalStyles} />
      <main>
        <Scene id="scene">
          <Content data-depth="0.15">
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

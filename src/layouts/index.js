import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from './../components/Header'
import Footer from './../components/Footer'
import GlobalStyle from './../helpers/globalStyles'
import Texture from './../components/Texture'
import Wave from './../components/Wave'

const Main = styled.main`
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 100vh;
`

const MainWrapper = styled.div`
  padding: 3rem;

  @media (min-width: 768px) {
    padding: 3.5rem;
  }
`

export default ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <Helmet
      title='Enrique Benitez - Full-Stack Developer and Digital Maker'
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500'
        },
        {
          rel: 'stylesheet',
          href: 'https://cloud.typography.com/7471216/6094192/css/fonts.css'
        }
      ]}
    />
    <Main>
      <MainWrapper>
        <Texture />
        <Header />
        {children}
      </MainWrapper>
      <Footer>
        <Wave />
      </Footer>
    </Main>
  </Fragment>
)

import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Styles from './../helpers/globalStyles'
import Header from './../components/Header'

const Main = styled.main`
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  height: 100vh;
`

const MainWrapper = styled.div`
  padding: 5rem;

  @media (min-width: 768px) {
    padding: 6rem;
  }
`

export default ({ children }) => (
  <Fragment>
    <Styles />
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
        <Header />
        {children}
      </MainWrapper>
    </Main>
  </Fragment>
)

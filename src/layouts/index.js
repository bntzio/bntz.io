import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

require('../helpers/globalStyles')

const Main = styled.main`
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
`

const MainWrapper = styled.div`
  padding: 3rem;

  @media (min-width: 768px) {
    padding: 3.5rem;
  }
`

const TemplateWrapper = ({ children }) => (
  <Main>
    <Helmet
      title='Superstylin | A Gatsby Starter with Style 🕶️'
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

    <MainWrapper>
      <Header />
      {children()}
    </MainWrapper>

    <Footer>
      <ul>
        <li>about</li>
        <li>blog</li>
        <li>projects</li>
        <li className='desktopOnly'>journal</li>
        <li className='desktopOnly'>now</li>
        <li className='desktopOnly'>open source</li>
        <li className='desktopOnly'>cheatsheets</li>
        <li className='desktopOnly'>courses</li>
        <li>newsletter</li>
      </ul>
    </Footer>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

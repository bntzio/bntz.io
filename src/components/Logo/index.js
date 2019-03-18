import React from 'react'
import styled from 'styled-components'

import logo from './../../assets/images/logo.svg'

export default () => (
  <Logo>
    <img src={logo} alt='Enrique Benitez' />
  </Logo>
)

const Logo = styled.div`
  img {
    width: 22.4rem;

    @media (min-width: 768px) {
      width: 28.8rem;
    }
  }
`

import React from 'react'
import styled from 'styled-components'

import logoImage from '../../assets/logo.png'

const LogoContainer = styled.div`
  img {
    width: 14rem;

    @media (min-width: 768px) {
      width: 18rem;
    }
  }
`

const Header = () => {
  return (
    <LogoContainer>
      <img src={logoImage} alt='Enrique Benitez' />
    </LogoContainer>
  )
}

export default Header

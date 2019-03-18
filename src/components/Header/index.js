import React from 'react'
import styled from 'styled-components'

import logo from './../../assets/images/logo.svg'

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt='Enrique Benitez' />
      </Logo>
      <Nav>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </Nav>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  img {
    width: 22.4rem;

    @media (min-width: 768px) {
      width: 28.8rem;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  margin-top: -1rem;

  li {
    list-style-type: none;
    margin: 0 3rem;
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`

export default Header

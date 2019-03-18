import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
/** custom imports */
import logoSvg from 'assets/images/logo.svg'

const Header = ({ logo }) => {
  const showLogo = () => {
    if (logo) {
      return (
        <Logo>
          <img src={logoSvg} alt='Enrique Benitez' />
        </Logo>
      )
    }
  }

  return (
    <Container logo={logo}>
      {showLogo()}
      <Nav logo={logo}>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/'>Projects</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </Nav>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.logo ? 'space-between' : 'flex-end')};
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
  margin-top: ${props => (props.logo ? '-1rem' : '0')};
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;

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

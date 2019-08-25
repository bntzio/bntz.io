import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
/** custom imports */
// @ts-ignore
import Logo from 'components/Logo'

const Header = ({ logo }: { logo: boolean }) => {
  const showLogo = () => {
    if (logo) {
      return <Logo />
    }
  }

  return (
    <Container logo={logo}>
      {showLogo()}
      <Nav logo={logo}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </Nav>
    </Container>
  )
}

const Container = styled.header<{ logo?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.logo ? 'space-between' : 'flex-end')};
`

const Nav = styled.nav<{ logo?: boolean }>`
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

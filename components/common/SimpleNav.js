import styled from 'styled-components'

const SimpleNav = ({ children }) => {
  return (
    <Nav>
      { children }
    </Nav>
  )
}

const Nav = styled.nav`
  position: absolute;
  top: 33px;
  left: 33px;
`

export default SimpleNav

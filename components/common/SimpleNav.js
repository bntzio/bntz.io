import styled from 'styled-components'
import { media } from '../../utils/styleUtils'

const SimpleNav = ({ children }) => {
  return (
    <Nav>
      { children }
    </Nav>
  )
}

const Nav = styled.nav`
  ${media.desktop`
    position: absolute;
    top: 33px;
    left: 33px;
  `}
`

export default SimpleNav

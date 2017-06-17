import styled from 'styled-components'
import { rem } from '../utils/styleUtils'

const Layout = (props) => (
  <LayoutContainer>
    {props.children}
  </LayoutContainer>
)

const LayoutContainer = styled.div`
  ${rem('padding', 33)};
`

export default Layout

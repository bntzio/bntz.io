import styled from 'styled-components'

const Layout = (props) => (
  <LayoutContainer>
    {props.children}
  </LayoutContainer>
)

const LayoutContainer = styled.div`
  color: gold;
  text-align: center;
`

export default Layout

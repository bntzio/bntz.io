import styled from 'styled-components'
import { media } from '../../utils/styleUtils'

const SimpleContainer = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}

const Container = styled.main`
  margin: 0 2.5%;

  ${media.tablet`
    margin: 0 5%;
  `}

  ${media.desktop`
    margin: 0 15%;
  `}

  ${media.largeDesktop`
    margin: 0 20%;
  `}
`

export default SimpleContainer

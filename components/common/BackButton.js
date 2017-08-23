import styled from 'styled-components'
import { rem, media } from '../../utils/styleUtils'

const BackButton = (props) => {
  return (
    <Container>
      <Arrow {...props} id="arrow" />
    </Container>
  )
}

const Container = styled.div`
  display: inline-flex;
  ${rem('padding-top', 24)};
  ${rem('padding-bottom', 24)};
  ${rem('padding-right', 16)};

  ${media.desktop`
    ${rem('padding-left', 24)};
    ${rem('padding-right', 24)};
  `}
`

const Arrow = styled.div`
  cursor: pointer;
  background-image: ${props => props.black ? "url('/static/assets/icons/arrow-black-left.svg')" : "url('/static/assets/icons/arrow-white-left.svg')"};
  ${rem('width', 22)};
  ${rem('height', 22)};
`

export default BackButton

import styled from 'styled-components'
import { rem, media } from '../../utils/styleUtils'

const SimpleTitle = (props) => {
  return <Title {...props}>{ props.title }</Title>
}

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: ${props => props.color};
  ${rem('font-size', 22)};
  ${rem('margin-top', 100)};

  ${media.desktop`
    ${rem('margin-top', 50)};
  `}

  &::selection {
    background: ${props => props.highlightColor};
  }
`

export default SimpleTitle

import styled from 'styled-components'
import { rem } from '../../utils/styleUtils'

const MarkdownWrapper = (props) => {
  return (
    <Container {...props}>
      { props.children }
    </Container>
  )
}

const Container = styled.section`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 28px;
  word-spacing: 1px;
  color: ${props => props.color};
  ${rem('font-size', 16)};

  a {
    text-decoration: none;
    color: ${props => props.highlightColor};
    border-bottom: 2.4px solid ${props => props.highlightColor};
    transition: .6s ease all;

    &:hover {
      background: ${props => props.highlightColor};
      color: ${props => props.selectionColor};
    }
  }

  & * {
    &::selection {
      color: ${props => props.selectionColor};
      background: ${props => props.highlightColor};
    }
  }
`

export default MarkdownWrapper

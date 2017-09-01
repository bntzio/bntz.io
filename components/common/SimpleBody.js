import styled from 'styled-components'
import { rem } from '../../utils/styleUtils'

const SimpleBody = ({ body, color, highlightColor }) => {
  return <Body color={color} highlightColor={highlightColor} dangerouslySetInnerHTML={{ __html: body }}></Body>
}

const Body = styled.section`
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
 line-height: 28px;
 word-spacing: 1px;
 color: ${props => props.color};
 ${rem('font-size', 16)};

 & * {
   &::selection {
     background: ${props => props.highlightColor};
   }
 }
`

export default SimpleBody

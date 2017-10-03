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

 a {
   text-decoration: none;
   border-bottom: 3px solid ${props => props.highlightColor};
   color: ${props => props.color};
 }

 & * {
   &::selection {
     background: ${props => props.highlightColor};
   }
 }
`

export default SimpleBody

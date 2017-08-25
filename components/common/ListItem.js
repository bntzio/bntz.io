import styled from 'styled-components'
import { Link } from '../../routes'
import { rem, media } from '../../utils/styleUtils'

const ListItem = ({ key, title, classname, route, slug }) => {
  return (
    <Item key={key} className={ classname }>
      <h2>
        <Link route={route} params={{ slug }}>
          <a>{title}</a>
        </Link>
      </h2>
    </Item>
  )
}

const Item = styled.div`
  ${rem('margin-bottom', -8)};

  ${media.desktop`
    ${rem('margin-left', 33)};
    ${rem('margin-right', 33)};
    ${rem('margin-bottom', -16)};


  `}

  h2 {
    font-family: 'Proxima N W01 Smbd';
    font-size: 20px;
    text-rendering: optimizeLegibility;

    a {
      color: white;
      text-decoration: none;

      ${media.desktop`
        &:hover {
          cursor: default;
          border-bottom: 3px solid white;
        }
      `}
    }
  }
`

export default ListItem

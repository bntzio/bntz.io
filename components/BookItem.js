import styled from 'styled-components'
import { Link } from '../routes'
import { rem, media } from '../utils/styleUtils'

const BookItem = ({ key, title, route, slug }) => {
  return (
    <Item key={key}>
      <h2 className="book">
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

    a {
      color: black;
      text-decoration: none;

      ${media.desktop`
        &:hover {
          cursor: pointer;
          border-bottom: 3px solid black;
        }
      `}
    }
  }
`

export default BookItem

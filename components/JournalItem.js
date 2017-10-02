import moment from 'moment'
import styled from 'styled-components'
import { Link } from '../routes'
import { media } from '../utils/styleUtils'

const JournalItem = ({ key, title, date, route, slug }) => {
  const formatDate = (date) => {
    return moment(date, 'MM/DD/YYYY').format('MMM DD YYYY')
  }
  return (
    <Item key={key}>
      <Link route={route} params={{ slug }}>
        <Wrapper>
          <p>
            <span>{formatDate(date)}</span>
            <a>{title}</a>
          </p>
        </Wrapper>
      </Link>
    </Item>
  )
}

const Item = styled.div`
  font-family: 'Proxima N W01 Smbd';
  font-size: 20px;
`

const Wrapper = styled.div`
  p {
    margin-bottom: -20px;
    display: flex;

    span {
      display: block;
      width: 120px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px 10px;
      text-transform: uppercase;
      text-align: center;
    }
    a {
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
      text-decoration: none;
      padding: 5px 10px;

      ${media.desktop`
        &:hover {
          background: rgba(0, 0, 0, 0.8);
          color: white;
        }
      `}
    }
  }
`

export default JournalItem

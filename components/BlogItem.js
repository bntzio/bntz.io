import styled from 'styled-components'
import { Link } from '../routes'

const BlogItem = ({ key, title, route, slug }) => {
  return (
    <Item key={key}>
      <h2>
        <Link route={route} params={{ slug }}>
          <Wrapper>
            <a>{title}</a>
          </Wrapper>
        </Link>
      </h2>
    </Item>
  )
}

const Item = styled.div`
  position: relative;
  text-align: center;

  h2 {
    font-family: 'Proxima N W01 Smbd';
    font-size: 20px;
    margin: 0.2rem 0;

    a {
      text-decoration: none;
      cursor: pointer;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export default BlogItem

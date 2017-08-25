import styled from 'styled-components'
import Link from 'next/link'
import BackButton from './BackButton'
import { rem } from '../../utils/styleUtils'

const MiniNav = ({ url, title }) => {
  return (
    <Nav>
      <Link href={url}>
        <a><BackButton /></a>
      </Link>
      <Title id="title">{title}</Title>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  font-family: 'Proxima N W01 Bold';
  text-rendering: optimizeLegibility;
  ${rem('font-size', 20)};
`

export default MiniNav

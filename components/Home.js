import styled from 'styled-components'
import { rem } from '../utils/styleUtils'

const Home = () => (
  <HomeContainer>
    <Logo />
  </HomeContainer>
)

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`

const Logo = styled.div`
  display: block;
  margin: 0 auto;
  background-image: url('static/brand.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 250px;
  height: 50px;
`

export default Home

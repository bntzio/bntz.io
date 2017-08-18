import styled from 'styled-components'

const Container = ({children}) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default Container

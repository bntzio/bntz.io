import styled from 'styled-components'

const Hero = (props) => {
  return (
    <Container id="hero" {...props}>
      <Content>
        { props.children }
      </Content>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 48vh;
  padding: 0 50px;
  box-sizing: border-box;
  text-align: center;
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  background-color: ${props => props.background};
  position: relative;
  opacity: ${props => props.animated ? '0' : '1'};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`

export default Hero

import React from 'react'
import styled from '@emotion/styled'
/** custom imports */
// @ts-ignore
import Logo from 'components/Logo'

const Header = () => (
  <Container>
    <Logo />
    <Description>Full-Stack Developer and Digital Maker</Description>
  </Container>
)

const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

const Description = styled.h1`
  margin-top: 1rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
`

export default Header

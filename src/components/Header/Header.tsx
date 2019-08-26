import React from 'react'
import styled from '@emotion/styled'
/** custom imports */
// @ts-ignore
import { useDarkModeState } from 'context/DarkMode'
// @ts-ignore
import Logo from 'components/Logo'
// @ts-ignore

const Header = () => {
  const darkMode: { on: boolean } = useDarkModeState()

  return (
    <Container>
      <Logo fill={darkMode.on ? '#fff' : '#000'} />
      <Description color={darkMode.on ? '#fff' : '#000'}>Full-Stack Developer and Digital Maker</Description>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

const Description = styled.h1<{ color: '#fff' | '#000' }>`
  margin-top: 1rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${props => props.color};
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all             */
  -ms-user-select: none; /* IE 10+                  */
  user-select: none; /* Likely future           */
`

export default Header

import React from 'react'
import styled from '@emotion/styled'

/** custom imports */
// @ts-ignore
import { useDarkModeState } from 'context/DarkMode'

export default ({ children }: any) => {
  const darkMode: { on: boolean } = useDarkModeState()

  return (
    <Layout bg={darkMode.on ? '#000' : '#fff'}>
      <Wrapper>{children}</Wrapper>
    </Layout>
  )
}

const Layout = styled.section<{ bg: '#000' | '#fff' }>`
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  height: 100vh;
  background: ${props => props.bg};
`

const Wrapper = styled.div`
  padding: 5rem;
  @media (min-width: 768px) {
    padding: 6rem;
  }
`

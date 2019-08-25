import React from 'react'
import styled from '@emotion/styled'
/** custom imports */
// @ts-ignore
import Logo from 'components/Logo'

export default ({ children }: any) => (
  <Layout>
    <Wrapper>
      <Logo />
      {children}
    </Wrapper>
  </Layout>
)

const Layout = styled.section`
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  height: 100vh;
`

const Wrapper = styled.div`
  padding: 5rem;
  @media (min-width: 768px) {
    padding: 6rem;
  }
`

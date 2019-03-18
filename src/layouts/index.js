import React from 'react'
import styled from 'styled-components'
/** custom imports */
import Logo from 'components/Logo'

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

export default ({ children }) => (
  <section>
    <Layout>
      <Wrapper>
        <Logo />
        {children}
      </Wrapper>
    </Layout>
  </section>
)

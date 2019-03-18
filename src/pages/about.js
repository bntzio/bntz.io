import React from 'react'
import styled from 'styled-components'
/** custom imports */
import About from 'components/About'
import Wave from 'components/Wave'

export default () => {
  return (
    <Main>
      <About />
      <Footer>
        <Wave />
      </Footer>
    </Main>
  )
}

const Main = styled.main``

const Footer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

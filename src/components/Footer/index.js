import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

export default ({ children }) => <Footer>{children}</Footer>

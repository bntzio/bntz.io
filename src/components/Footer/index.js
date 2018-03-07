import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  p {
    color: #1d1d1d;
    font-size: 0.8rem;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-weight: 600;
    a {
      color: red;
      text-decoration: none;
    }
  }
`

const Footer = ({ children }) => {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  )
}

export default Footer

import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3rem;
  background: #ff1f4f;
  padding: -3rem;

  @media(min-width: 768px) {
    height: 3.5rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    li {
      color: white;
      margin-bottom: 2px;
    }

    .desktopOnly {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }
`

const Footer = ({ children }) => {
  return (
    <FooterContainer>
      {children}
    </FooterContainer>
  )
}

export default Footer

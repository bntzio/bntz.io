import React from 'react'
import styled from 'styled-components'

import Layout from '../../layouts'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    display: none;
    color: #ff1f4f;
    font-size: 1.6rem;
    font-weight: 500;

    &:first-child {
      margin-top: 7rem;
    }

    @media (min-width: 768px) {
      font-size: 2.4rem;
      display: block;
    }

    &#mobile-title {
      display: block;
      margin-top: 4rem;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        display: none;
      }
    }

    span {
      color: #a5a9b5;
      font-weight: 300;
    }
  }

  p {
    width: 100%;
    font-size: 1.1rem;
    color: #a5a9b5;
    font-weight: 300;
    line-height: 1.8rem;

    @media (min-width: 768px) {
      width: 50%;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  ul {
    margin-top: 2rem;
    display: inline-flex;
    align-items: center;

    li {
      margin-right: 1.4rem;

      @media (min-width: 768px) {
        margin-right: 1.8rem;
      }

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 1.2rem;
        height: 1.2rem;

        @media (min-width: 768px) {
          width: auto;
          height: auto;
        }
      }
    }
  }
`

const MainContent = ({ children }) => (
  <Layout>
    <MainContainer>{children}</MainContainer>
  </Layout>
)

export default MainContent

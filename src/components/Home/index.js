import React from 'react'
import styled from 'styled-components'

import Layout from './../../layouts'
import twitter from './../../assets/icons/twitter.svg'
import facebook from './../../assets/icons/facebook.svg'
import instagram from './../../assets/icons/instagram.svg'
import codepen from './../../assets/icons/codepen.svg'
import github from './../../assets/icons/github.svg'

const Home = () => (
  <Layout>
    <Main>
      <h2>
        Front-end designer <span>by day</span>
      </h2>
      <h2>
        Back-end developer <span>by night</span>
      </h2>
      <h2 id='mobile-title'>
        Full-Stack Developer <span>and</span> Digital Maker
      </h2>
      <p>
        Hello 👋 I’m Enrique, a self-taught full-stack digital maker specialized
        in creating beautiful apps.
      </p>
      <ul>
        <li>
          <img alt='Twitter' src={twitter} />
        </li>
        <li>
          <img src={facebook} alt='Twitter' />
        </li>
        <li>
          <img alt='Twitter' src={instagram} />
        </li>
        <li>
          <img src={codepen} alt='Twitter' />
        </li>
        <li>
          <img src={github} alt='Twitter' />
        </li>
      </ul>
    </Main>
  </Layout>
)

const Main = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    display: none;
    color: #000;
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

export default Home

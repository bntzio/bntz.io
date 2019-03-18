import React from 'react'
import styled from 'styled-components'

const About = () => (
  <Content>
    <h6>Hello friend,</h6>
    <h2>I craft beautiful web experiences and powerful apps.</h2>
    <p>
      Let me introduce myself a little bit.
      <br />
      <br />
      I'm Enrique, a full stack developer who loves to build cool stuff in the
      Internet.
      <br />
      <br />
      Consider myself as a digital maker, from open source tools to fully
      polished products, that's what I do and love 👨‍💻
      <br />
      <br />
      I always aim for beautiful UX and pixel-perfect design in everything I do,
      and when I say everything I mean it.
      <br />
      <br />
      My favorite tech combo usually includes React, NodeJS and Ruby on Rails.
      <br />
      <br />
      On my free time, I enjoy learning new technologies, so I'm basically a
      polyglot programmer. Currently I'm learning Swift.
      <br />
      <br />
      I also like to read, especially business or marketing related books, you
      can surf through my latests book reads and reviews 📚
      <br />
      <br />
      If you'd like to learn more about me, send me a message, ask me anything
      or check what I'm doing now.
    </p>
  </Content>
)

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }

  h6 {
    font-size: 2rem;
    margin-top: 8rem;
    margin-bottom: 1.2rem;
    color: rgb(102, 102, 102);
    font-weight: 300;

    @media (min-width: 768px) {
      margin-top: 10rem;
      margin-bottom: 1.4rem;
      font-size: 2.4rem;
    }
  }

  h2 {
    color: rgb(0, 0, 0);
    font-size: 2.4rem;
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    width: 100%;
    font-size: 1.7rem;
    color: rgb(68, 68, 68);
    font-weight: 300;
    line-height: 3rem;
    margin-top: 3.3rem;

    @media (min-width: 768px) {
      width: 50%;
      font-size: 1.9rem;
      margin-top: 5rem;
    }
  }
`

export default About

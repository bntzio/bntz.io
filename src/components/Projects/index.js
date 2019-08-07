import React from 'react'
import styled from 'styled-components'

const Projects = () => (
  <Content>
    <div style={{ background: 'tomato', padding: '75px 10px' }} id='container'>
      <h1>Sourcery</h1>
      <h2>Open Source Screencasts</h2>
    </div>
  </Content>
)

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 20rem;
  }

  h1 {
    font-size: 2rem;
    color: rgb(102, 102, 102);
    font-weight: 300;

    @media (min-width: 768px) {
      margin-bottom: 1.4rem;
      font-size: 2.4rem;
    }
  }

  h2 {
    color: rgb(0, 0, 0);
    font-size: 2.4rem;
    font-weight: 500;
    width: 100%;

    @media (min-width: 768px) {
      width: 90%;
      font-size: 3rem;
    }
    @media (min-width: 1024px) {
      width: 50%;
    }
    @media (min-width: 1200px) {
      width: 100%;
    }
  }
`

export default Projects

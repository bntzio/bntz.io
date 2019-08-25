import React, { useState } from 'react'
import styled from '@emotion/styled'
import { navigate, Link } from 'gatsby'
import Terminal from 'terminal-in-react'
import NewWindow from 'react-new-window'
/** custom imports */
// @ts-ignore
import twitter from 'assets/icons/twitter.svg'
// @ts-ignore
import facebook from 'assets/icons/facebook.svg'
// @ts-ignore
import instagram from 'assets/icons/instagram.svg'
// @ts-ignore
import codepen from 'assets/icons/codepen.svg'
// @ts-ignore
import github from 'assets/icons/github.svg'

const Home = () => {
  const [hideTerminal, setHideTerminal] = useState(false)

  const portal = (url: string) => <NewWindow url={url} />

  return (
    <Content>
      {hideTerminal && (
        <Links>
          <Link to="/blog">Blog</Link>
          <Link to="/">Projects</Link>
          <Link to="/">About</Link>
        </Links>
      )}
      {!hideTerminal && (
        // @ts-ignore
        <Terminal
          color="lime"
          backgroundColor="black"
          barColor="black"
          style={{ fontWeight: 'bold', fontSize: '1em', height: 375 }}
          commands={{
            blog: () => navigate('/blog'),
            projects: () => navigate('/blog'),
            about: () => navigate('/blog'),
            twitter: () => portal('https://twitter.com/bntzio'),
            facebook: () => portal('https://facebook.com/bntzio'),
            instagram: () => portal('https://instagram.com/bntzio'),
            github: () => portal('https://github.com/bntzio'),
            quit: () => setHideTerminal(true)
          }}
          descriptions={{
            show: 'show the initial message ⌨️',
            clear: 'clear the screen 🧼',
            help: 'list all the commands 💻',
            blog: 'go to my blog ✍️',
            projects: 'learn about my projects 👨‍💻',
            about: 'read more about me 😄',
            twitter: 'open my twitter 🐦',
            facebook: 'open my facebook 📘',
            instagram: 'open my instagram 🖼️',
            github: 'open my github 😸',
            quit: 'close this terminal and show classic approach 👋'
          }}
          msg="Welcome to my digital home! To navigate through type help and press enter. If you don't like this,
          type quit and press enter."
        />
      )}

      <Social>
        <a href="https://twitter.com/bntzio" target="_blank">
          <li>
            <img alt="Twitter" src={twitter} />
          </li>
        </a>
        <a href="https://facebook.com/bntzio" target="_blank">
          <li>
            <img src={facebook} alt="Twitter" />
          </li>
        </a>
        <a href="https://instagram.com/bntzio" target="_blank">
          <li>
            <img alt="Twitter" src={instagram} />
          </li>
        </a>
        <a href="https://codepen.io/bntzio" target="_blank">
          <li>
            <img src={codepen} alt="Twitter" />
          </li>
        </a>
        <a href="https://github.com/bntzio" target="_blank">
          <li>
            <img src={github} alt="Twitter" />
          </li>
        </a>
      </Social>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
  padding: 5rem 0;
`

const Links = styled.div`
  margin-top: 10rem;

  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 1.4rem;
    margin-right: 2.2rem;
    padding: 1rem 3rem;
    background: transparent;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 1px;
    border: 2px solid black;

    @media (min-width: 768px) {
      margin-right: 2.8rem;
    }

    &:hover {
      background: black;
      color: white;
    }
  }
`

const Social = styled.ul`
  margin-top: 10rem;
  display: inline-flex;
  align-items: center;

  a {
    margin-right: 2.2rem;
    @media (min-width: 768px) {
      margin-right: 2.8rem;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  li {
    img {
      width: 1.9rem;
      height: 1.9rem;
      @media (min-width: 768px) {
        width: auto;
        height: auto;
      }
    }
  }
`

export default Home

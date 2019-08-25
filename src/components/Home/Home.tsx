import React, { useState } from 'react'
import styled from '@emotion/styled'
import { navigate, Link } from 'gatsby'
import Terminal from 'terminal-in-react'
import NewWindow from 'react-new-window'
/** custom imports */
// @ts-ignore
import { useDarkModeDispatch } from 'context/DarkMode'
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
  const dispatch: ({ type }: { type: 'toggle' | 'on' | 'off' }) => void = useDarkModeDispatch()

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
            whoami: {
              method: (_args: any, print: (msg: string) => string) => {
                print(`Hi! My name is Enrique. I'm a full-stack developer and maker.`)
                print(`I love to make stuff on the Internet, since I was a kid I got in love with computers.`)
                print(`Since then I've been learning new stuff to improve my craft.`)
                print(`I consider myself as a 60% frontend and 40% backend developer.`)
                print(
                  // eslint-disable-next-line max-len
                  `From the frontend side, I always aim for pixel perfect designs and beautiful UX. From the backend, I structure everything in a scalable manner.`
                )
                print(
                  `Some technologies I work with are React, NodeJS, TypeScript, Python, Ruby on Rails, among others.`
                )
                print(
                  // eslint-disable-next-line max-len
                  `On my free time I read books, launch side projects, learn new technologies, write on my blog and contribute to open source.`
                )
              }
            },
            darkmode: (args: 'toggle' | 'on' | 'off', print: (msg: string) => string) => {
              if (!args[1]) {
                return dispatch({ type: 'toggle' })
              }

              switch (args[1]) {
                case 'toggle':
                  return dispatch({ type: 'toggle' })
                case 'on':
                  return dispatch({ type: 'on' })
                case 'off':
                  return dispatch({ type: 'off' })
                default:
                  return print(`Please provide a valid argument.`)
              }
            },
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
            whoami: 'read more about me 😄',
            darkmode: 'toggle dark mode 🔲',
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

import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { navigate, Link } from 'gatsby'
import Terminal from 'terminal-in-react'
import NewWindow from 'react-new-window'
/** custom imports */
// @ts-ignore
import { useDarkModeDispatch } from 'context/DarkMode'
// @ts-ignore
import { useProjectsModeDispatch, useProjectsModeState } from 'context/ProjectsMode'
// @ts-ignore
import Card from 'components/Card'
// @ts-ignore
import { ControlsLeft, ControlsRight } from 'components/Controls'
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

const CARDS = [
  <Card
    url={`https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40`}
  />,
  <Card
    url={`https://images.unsplash.com/photo-1566762492169-816dfd8be4b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`}
  />,
  <Card
    url={`https://images.unsplash.com/photo-1562185022-c0a7889d7fbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80`}
  />,
  <Card
    url={`https://images.unsplash.com/photo-1566728618788-11b888adb6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1012&q=80`}
  />
]

const Home = () => {
  const [hideTerminal, setHideTerminal] = useState(false)
  const darkModeDispatch: ({ type }: { type: 'toggle' | 'on' | 'off' }) => void = useDarkModeDispatch()
  const projectsMode: { on: boolean } = useProjectsModeState()
  const projectsModeDispatch: ({ type }: { type: 'on' | 'off' }) => void = useProjectsModeDispatch()
  const [currentCard, setCurrentCard] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    if (projectsMode.on) {
      setHideTerminal(true)
    } else {
      setHideTerminal(false)
    }
  }, [projectsMode])

  useEffect(() => {
    setSelectedCard(CARDS[currentCard] as any)
  }, [currentCard])

  const portal = (url: string) => <NewWindow url={url} />

  return (
    <Content>
      {projectsMode.on && (
        <BackToTerminalBtn
          onClick={() => {
            projectsModeDispatch({ type: 'off' })
          }}
        >
          Back to Terminal
        </BackToTerminalBtn>
      )}
      {projectsMode.on && (
        <ProjectContainer>
          <div
            onClick={() => (currentCard !== 0 ? setCurrentCard(currentCard - 1) : null)}
            style={{ visibility: currentCard === 0 ? 'hidden' : 'visible' }}
          >
            <ControlsLeft />
          </div>
          {selectedCard}
          <div
            onClick={() => (currentCard !== CARDS.length - 1 ? setCurrentCard(currentCard + 1) : null)}
            style={{ visibility: currentCard === CARDS.length - 1 ? 'hidden' : 'visible' }}
          >
            <ControlsRight />
          </div>
        </ProjectContainer>
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
            projects: () => projectsModeDispatch({ type: 'on' }),
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
                return darkModeDispatch({ type: 'toggle' })
              }
              switch (args[1]) {
                case 'toggle':
                  return darkModeDispatch({ type: 'toggle' })
                case 'on':
                  return darkModeDispatch({ type: 'on' })
                case 'off':
                  return darkModeDispatch({ type: 'off' })
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

      {hideTerminal && !projectsMode.on && (
        <React.Fragment>
          <Links>
            <Link to="/blog">Blog</Link>
            <Link to="/">Projects</Link>
            <Link to="/">About</Link>
          </Links>
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
        </React.Fragment>
      )}
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

const BackToTerminalBtn = styled.button`
  outline: none;
  background: transparent;
  border: 1.4px solid #dedede;
  color: #cecece;
  font-size: 1.4rem;
  font-weight: lighter;
  border-radius: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 5rem;
  padding: 0.5rem 2rem;
  margin-top: -2.5rem;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all             */
  -ms-user-select: none; /* IE 10+                  */
  user-select: none; /* Likely future           */

  &:hover {
    cursor: pointer;
    border-color: #cecece;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 8rem;
    color: #dedede;

    &:hover {
      color: #cecece;
      cursor: pointer;
    }
  }
`

export default Home

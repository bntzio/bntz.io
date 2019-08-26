import React from 'react'
import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring'

interface Props {
  url: string
}

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default ({ url }: Props) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <Card
      url={url}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans as any) }}
    >
      <CardTitle>#01 My Super Project</CardTitle>
      <CardDescription>Open Source Screencasts for Developers</CardDescription>
    </Card>
  )
}

const Card = styled(animated.div)<{ url: string }>`
  width: 45ch;
  height: 45ch;
  background: grey;
  border-radius: 5px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`

const CardTitle = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all             */
  -ms-user-select: none; /* IE 10+                  */
  user-select: none; /* Likely future           */
`

const CardDescription = styled.span`
  text-transform: uppercase;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.2rem;
  width: 40%;
  line-height: 1.4;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all             */
  -ms-user-select: none; /* IE 10+                  */
  user-select: none; /* Likely future           */
`

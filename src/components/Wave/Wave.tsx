import React from 'react'
import styled from '@emotion/styled'
/** custom imports */
// @ts-ignore
import wave from 'assets/svg/wave.svg'
// @ts-ignore
import { useProjectsModeState } from 'context/ProjectsMode'

export default () => {
  const projectsMode: { on: boolean } = useProjectsModeState()

  return <Wave wave={wave} lighter={projectsMode.on} />
}

const Wave = styled.div<{ wave: string; lighter: boolean }>`
  background: ${props => `url(${props.wave})`} repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  opacity: ${props => (props.lighter ? 0.04 : 1)};
  transition: ease-in opacity 0.8s;

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`

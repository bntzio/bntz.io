import React from 'react'
import styled from '@emotion/styled'
/** custom imports */
// @ts-ignore
import wave from 'assets/svg/wave.svg'

const Wave = styled.div<{ wave: string }>`
  background: ${props => `url(${props.wave})`} repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
`

export default () => <Wave wave={wave} />

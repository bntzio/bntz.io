import * as d3 from 'd3'
import React from 'react'
import textures from 'textures'
import styled from '@emotion/styled'
import ReactFauxDOM from 'react-faux-dom'
/** custom imports */
// @ts-ignore
import { useDarkModeState } from 'context/DarkMode'

const Texture = () => {
  const darkMode: { on: boolean } = useDarkModeState()

  const node = ReactFauxDOM.createElement('svg')
  const d3svg = d3.select(node)

  const texture = textures
    .circles()
    .size(20)
    .lighter()
    .lighter()
    .fill(darkMode.on ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)')

  d3svg.call(texture)

  d3svg
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('height', 3000)
    .attr('width', 3000)
    .style('fill', texture.url())

  return <TextureWrapper>{node.toReact()}</TextureWrapper>
}

const TextureWrapper = styled.div`
  svg {
    position: absolute;
    top: -50px;
    bottom: 0px;
    right: -200px;
    left: -200px;
    height: 100vh;
    width: 180vw;
    z-index: -1;
  }
`

export default Texture

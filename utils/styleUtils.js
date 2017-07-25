import { css } from 'styled-components'

// mixins!!
export function rem (property, value) {
  return `
    ${property}: ${value}px;
    ${property}: ${value * 0.0625}rem;
  `
}

export function polyRem (property, value1, value2) {
  return `
    ${property}-top: ${value1}px;
    ${property}-right: ${value2}px;
    ${property}-bottom: ${value1}px;
    ${property}-left: ${value2}px;
    ${property}-top: ${value1 * 0.0625}rem;
    ${property}-right: ${value2 * 0.0625}rem;
    ${property}-bottom: ${value1 * 0.0625}rem;
    ${property}-left: ${value2 * 0.0625}rem;
  `
}

// media queries!!
export const media = {
  tablet: (...args) => css`
    @media (min-width: 420px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  largeDesktop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `
}

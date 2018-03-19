import React from 'react'

import MainContent from '../components/MainContent'

import twitterIcon from '../assets/icons/twitter.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import codepenIcon from '../assets/icons/codepen.svg'
import githubIcon from '../assets/icons/github.svg'

export default () => (
  <MainContent>
    <h2>Front-end designer <span>by day</span></h2>
    <h2>Back-end developer <span>by night</span></h2>
    <h2 id='mobile-title'>Full-Stack Developer <span>and</span> Digital Maker</h2>
    <p>Hello 👋 I’m Enrique, a self-taught full-stack digital maker
specialized in creating beautiful apps.</p>
    <ul>
      <li><img src={twitterIcon} alt='Twitter' /></li>
      <li><img src={facebookIcon} alt='Twitter' /></li>
      <li><img src={instagramIcon} alt='Twitter' /></li>
      <li><img src={codepenIcon} alt='Twitter' /></li>
      <li><img src={githubIcon} alt='Twitter' /></li>
    </ul>
  </MainContent>
)

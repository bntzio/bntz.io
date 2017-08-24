import { TimelineMax, Power0, Back } from 'gsap'

// arrow animation
export const arrowAnimation = () => {
  const el = document.getElementById('arrow')
  return new TimelineMax().fromTo(el, 0.6, {
    x: 50,
    autoAlpha: 0
  }, {
    x: 0,
    autoAlpha: 1,
    ease: Back.easeInOut.config(2)
  })
}

// titles animation
export const titleAnimation = () => {
  const title = document.getElementById('title')
  return new TimelineMax().fromTo(title, 0.5, {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    ease: Power0.easeNone
  })
}

// content animation
export const contentAnimation = () => {
  const content = document.getElementById('content')
  return new TimelineMax().from(content, 0.3, {
    y: 70,
    autoAlpha: 0,
    ease: Power0.easeIn,
    delay: 0.4
  })
}

// journal entries animation
export const entriesAnimation = () => {
  const entries = document.getElementsByClassName('entry')
  return new TimelineMax().staggerFrom(entries, 0.3, {
    y: 50,
    autoAlpha: 0,
    ease: Power0.easeNone
  }, 0.2)
}

// posts animation
export const postsAnimation = () => {
  const posts = document.getElementsByClassName('post')
  return new TimelineMax().staggerFrom(posts, 0.3, {
    y: 50,
    autoAlpha: 0,
    ease: Power0.easeNone
  }, 0.2)
}

// project frames animation
export const framesAnimation = () => {
  const projects = document.getElementsByClassName('project')
  const arrow = document.getElementById('arrow')
  return new TimelineMax().set(arrow, { autoAlpha: 0 }).staggerFromTo(projects, 0.3, {
    autoAlpha: 0,
    ease: Power0.easeNone
  }, { autoAlpha: 1, ease: Power0.easeNone }, 0.1)
}

// project mobile nav animation
export const mobileNavAnimation = () => {
  const nav = document.getElementById('mobileNav')
  return new TimelineMax().fromTo(nav, 0.6, {
    autoAlpha: 0,
    y: -30
  }, {
    autoAlpha: 1,
    y: 0,
    ease: Power0.easeNone,
    delay: 0.2
  })
}

// project hero animation
export const heroAnimation = () => {
  const hero = document.getElementById('hero')
  return new TimelineMax().to(hero, 0.6, {
    opacity: 1
  })
}

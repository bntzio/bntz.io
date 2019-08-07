import React, { useLayoutEffect } from 'react'
import { TweenMax, Linear, TimelineMax } from 'gsap'
/** custom imports */
import Head from 'heads/projects'
import GlobalStyles from 'styles/global'
import Layout from 'layouts/projects'
import Projects from 'components/Projects'

const detectScroll = callback => {
  var lastScroll = 0

  window.onscroll = () => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll
      callback('down')
    } else {
      lastScroll = currentScroll
      callback('up')
    }
  }
}

export default () => {
  useLayoutEffect(() => {
    TweenMax.defaultEase = Linear.easeNone

    var viewSteps = document.querySelectorAll('.step')

    var viewportHeight = window.innerHeight

    var scroller = {
      container: document.querySelector('#scroll-container'),
      viewportHeight: viewportHeight,
      stepHeight: Math.max(viewportHeight, 2500),
      scrollHeight: 0,
      padding: 400,
      steps: [],
      step: 0,
      y: 0
    }

    const container = document.getElementById('container')

    const tl = new TimelineMax({ paused: true, onUpdate: update })

    const update = () => {
      console.log('🍍')
    }

    tl.play()

    TweenMax.set(document.body, {
      height: scroller.scrollHeight + scroller.viewportHeight
    })

    // detectScroll(direction => {
    //   if (direction === 'down') {
    //     console.log('scrolling down')
    //     tl.play()
    //   } else {
    //     console.log('scrolling up')
    //     tl.reverse()
    //   }
    // })

    // TweenMax.to(container, 0.6, {
    //   ease: Power0.easeNone,
    //   y: 50,
    //   opacity: 0
    // })
  }, [])
  return (
    <>
      <Head />
      <GlobalStyles />
      <main>
        <Layout>
          <Projects />
        </Layout>
      </main>
    </>
  )
}

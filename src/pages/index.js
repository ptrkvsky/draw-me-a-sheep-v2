import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import hoverEffect from 'hover-effect'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import blake from '../images/vignettes/blake.png'
import diss from '../images/displacement/1.jpg'

const IndexPage = () => {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('.ticket'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: blake,
      image2:
        'https://images.unsplash.com/photo-1584944471186-8568e2793a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      displacementImage:
        'https://cdn.rawgit.com/robin-dela/hover-effect/b6c6fd26/images/stripe1mul.png?raw=true',
    })
    console.log(hoverEffect)
    /*
    tl.current = gsap.timeline({ paused: true })
    tl.current.addLabel('startPoint')

    tl.current.to('#illuHeroHome .illu', {
      duration: 0.5,
      x: '10%',
      opacity: 0,
    })
    tl.current.to('.InfosIconsDetailContainer', {
      duration: 0.5,
      Y: '10%',
      opacity: 0,
    })
    tl.current.to(
      '#titleAndButton',
      {
        duration: 0.5,
        x: '-10%',
        opacity: 0,
      },
      '-=0.75'
    )
    */
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="ticket">
        <div className="overlay"></div>
        <div className="flight-info">
          <h3>JUNE 30 2018 12:30PM</h3>
          <div className="flight-locations">
            <h1>LAX</h1>
            <img
              alt="avion"
              src="https://cdn-images-1.medium.com/max/800/1*QFU_XYAKOGJ9nunfqvem1w.png"
            />
            <h1>JFK</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

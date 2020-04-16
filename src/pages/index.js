/* eslint-disable new-cap */
/* eslint-disable no-new */
import React, { useEffect, useState, useRef } from 'react'
import { TweenMax, Expo } from 'gsap'
import * as THREE from 'three'
import hoverEffect from 'hover-effect'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import blake from '../images/vignettes/blake.png'
import woman1 from '../images/vignettes/02.png'
import woman2 from '../images/vignettes/03.png'
import diss from '../images/displacement/diss.png'

const IndexPage = () => {
  const overlay1 = useRef(null)
  const overlay2 = useRef(null)
  const overlay3 = useRef(null)
  const navBarDiv = useRef(null)

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: woman1,
      image2: woman2,
      imagesRatio: 380 / 300,
      displacementImage: diss,
    })

    // OVERLAY
    TweenMax.to(overlay1.current, 1.5, {
      delay: 0.5,
      top: '-100%',
      ease: Expo.easeInOut,
    })

    TweenMax.to(overlay2.current, 1.5, {
      delay: 0.7,
      top: '-100%',
      ease: Expo.easeInOut,
    })

    TweenMax.to(overlay3.current, 1.5, {
      delay: 0.9,
      top: '-100%',
      ease: Expo.easeInOut,
    })

    TweenMax.staggerFrom(
      navBarDiv.current,
      1.5,
      {
        delay: 1.5,
        opacity: 0,
        y: '20',
        ease: Expo.easeInOut,
      },
      0.08
    )
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="wrapper">
        <div ref={overlay1} className="overlay first"></div>
        <div ref={overlay2} className="overlay second"></div>
        <div ref={overlay3} className="overlay third"></div>

        <nav className="navbar">
          <div ref={navBarDiv} className="menu">
            <ion-icon name="ios-menu"></ion-icon>
          </div>
          <div ref={navBarDiv} className="lang">
            eng
          </div>
          <div ref={navBarDiv} className="search">
            <ion-icon name="ios-search"></ion-icon>
          </div>
        </nav>

        <div className="media">
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
        </div>

        <div className="text">
          <h1>
            <span className="hidetext">PETRI&KOVSKY</span>
          </h1>
          <h2>duality</h2>
          <h3>
            <span className="hidetext">
              collection 2017 <br />
              duality
            </span>
          </h3>
          <p>
            <span className="hidetext">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              quis, delectus facere neque sunt commodi quae culpa dolores
              doloribus magnam?
            </span>
          </p>
        </div>

        <div className="distortion"></div>
      </div>
    </Layout>
  )
}

export default IndexPage

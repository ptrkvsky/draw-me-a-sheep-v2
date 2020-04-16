/* eslint-disable new-cap */
/* eslint-disable no-new */
import React, { useEffect, useState, useRef } from 'react'
import gsap, { TweenMax, Expo, TimelineLite } from 'gsap'
import * as THREE from 'three'
import hoverEffect from 'hover-effect'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import blake from '../images/vignettes/blake.png'
import woman1 from '../images/vignettes/02.png'
import woman2 from '../images/vignettes/03.png'
import diss from '../images/displacement/diss.png'

import { Nom, BlockText, SubHeading, Description } from '../styles/pages/index'

const IndexPage = () => {
  const tl = useRef()

  const nom = useRef(null)
  const subnom = useRef(null)
  const subheading = useRef(null)

  const overlay1 = useRef(null)
  const overlay2 = useRef(null)
  const overlay3 = useRef(null)

  const media = useRef(null)

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

    tl.current = gsap.timeline()

    // == OVERLAY == //
    tl.current.to(overlay1.current, 1.5, {
      delay: 0.5,
      top: '-100%',
      ease: Expo.easeInOut,
    })

    tl.current.to(
      overlay2.current,
      1.5,
      {
        top: '-100%',
        ease: Expo.easeInOut,
      },
      '-=1.3'
    )
    tl.current.to(
      overlay3.current,
      1.5,
      {
        top: '-100%',
        ease: Expo.easeInOut,
      },
      '-=1.3'
    )

    // == TEXT == //
    tl.current.from(
      nom.current,
      1.5,
      {
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=1.3'
    )

    tl.current.from(
      subnom.current,
      1.5,
      {
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=1.3'
    )

    tl.current.from(
      subheading.current,
      1.5,
      {
        y: '100%',
        ease: Expo.easeInOut,
      },
      '-=1.2'
    )

    // MEDIA
    TweenMax.staggerFrom(
      '.media_item',
      1.5,
      {
        delay: 1.5,
        opacity: 0,
        x: '-20',
        ease: Expo.easeInOut,
      },
      0.08
    )

    TweenMax.from('.text h3 .hidetext', 1.5, {
      delay: 1.2,
      y: '100%',
      ease: Expo.easeInOut,
    })

    TweenMax.from('.text p .hidetext', 1.5, {
      delay: 1.3,
      y: '100%',
      ease: Expo.easeInOut,
    })
    /*
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
    */

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
            <li className="media_item" ref={media}>
              facebook
            </li>
            <li className="media_item" ref={media}>
              instagram
            </li>
            <li className="media_item" ref={media}>
              twitter
            </li>
          </ul>
        </div>

        <BlockText className="block-text">
          <div className="relative">
            <Nom>
              <span className="hide-text">
                <span className="d-block" ref={nom}>
                  PETRI&
                </span>
              </span>
              <span className="hide-text">
                <span className="d-block" ref={subnom}>
                  KOVSKY
                </span>
              </span>
            </Nom>
            <SubHeading className="hide-text">
              <span className="d-block" ref={subheading}>
                Developer <br />
                Autistic
              </span>
            </SubHeading>
            <Description>
              Je suis incapable de faire de l'intégration correctement, si
              seulement je pouvais avoir du talent et un sexe de 23cm.
            </Description>
          </div>
        </BlockText>

        <div className="distortion"></div>
      </div>
    </Layout>
  )
}

export default IndexPage

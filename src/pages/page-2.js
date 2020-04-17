import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'

import { TimelineMax, Expo } from 'gsap'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { ImageContainer } from '../styles/pages/page-detail'
import imageIllu from '../images/smoke.jpeg'

const SecondPage = () => {
  let container = useRef(null)
  const cover = useRef(null)
  let image = useRef(null)

  const tl = new TimelineMax()

  useEffect(() => {
    tl.to(container, 1, { css: { visibility: 'visible' } })
      .staggerTo(
        '.cover',
        1.4,
        {
          width: 0,
          ease: Expo.easeInOut,
        },
        0.1
      )
      .from(image, 1.4, { scale: 1.6, ease: Expo.easeInOut }, '-=1.4')
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <div ref={el => (container = el)} className="max-container v-hidden">
        <div className="v-align">
          <ImageContainer className="image-container">
            <div className="cover"></div>
            <div className="cover"></div>
            <div className="cover"></div>
            <img ref={el => (image = el)} alt="illu" src={imageIllu} />
          </ImageContainer>
        </div>
      </div>
    </Layout>
  )
}
export default SecondPage

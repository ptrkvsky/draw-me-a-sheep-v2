import React from 'react'
import { Global, css } from '@emotion/core'
import theme from './theme'
import mediaQueries from './mediaQueries'

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* RESET CSS ERIC MEYER */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        /* -------------- */
        /*  TWEAK GATSBY  */
        /* -------------- */
        .tl-edges,
        main {
          min-height: 100vh;
        }

        /* ------------- */
        /* STYLES GLOBAL */
        /* ------------- */

        body {
          background: ${theme.bg.main};
          color: ${theme.colors.main};
          font-size: 18px;
          font-family: ${theme.fonts.primary};
          min-height: 100vh;
          overflow: hidden;
        }

        img {
          max-width: 100%;
        }

        a {
          color: ${theme.colors.primary};
          text-decoration: none;
        }

        /* HELPERS */
        .max-container {
          width: ${theme.maxWidth};
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        .d-block {
          display: block;
        }

        .v-hidden {
          visibility: hidden;
        }

        .v-align {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hide-text {
          display: block;
          overflow: hidden;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          height: 80px;
          align-items: center;
        }

        .navbar > div {
          padding: 0 30px;
          font-size: 20px;
        }

        .navbar .menu {
          margin-right: auto;
        }

        .navbar .lang {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }

        /* SOCIAL MEDIA
=========================== */
        .media ul {
          position: absolute;
          bottom: 240px;
          left: -120px;
          transform: rotate(-90deg);
        }

        .media ul li {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          display: inline-block;
          padding: 0 30px;
        }

        /* DISTORTION
=========================== */
        .distortion {
          width: 580px;
          height: 720px;
          position: absolute;
          right: 0;
          bottom: 0;
        }

        /* OVERLAY
=========================== */
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0%;
          z-index: 99;
        }

        .first {
          background: #efde74;
        }

        .second {
          background: #efde74;
          left: 33.3%;
        }

        .third {
          background: #efde74;
          left: 66.6%;
        }
      `}
    />
  )
}

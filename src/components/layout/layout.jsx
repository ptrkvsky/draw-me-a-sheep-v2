import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../styles/Global'
import Sidebar from './sidebar'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Sidebar />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

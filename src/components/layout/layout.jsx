import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../styles/Global'
import Sidebar from './sidebar'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

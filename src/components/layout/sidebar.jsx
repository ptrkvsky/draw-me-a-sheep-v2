import React from 'react'
import { BlockNav } from '../../styles/components/layout/sidebar'

const Sidebar = () => {
  console.log('sidebar')
  return (
    <BlockNav>
      <ul>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">Price scales</a>
        </li>
      </ul>
    </BlockNav>
  )
}

export default Sidebar

import React from 'react'
import { Nav } from './Nav'
import { SideNav } from './SideNav'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <SideNav />
      {children}
    </div>
  )
}

export default Layout

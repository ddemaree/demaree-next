import React from 'react'
import Link from 'next/link'
import './SiteHeader.scss'
// import DDIcon from './src/DDIcon'

export const SiteHeader = (props) => (
  <header id="site-header" className="site-header">
    <Link href="/">
      <a className="header-logo">
        <h1>David Demaree</h1>
      </a>
    </Link>
    <nav className="site-nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/writing">
        <a>Writing</a>
      </Link>
      <Link href="/photography">
        <a>Photography</a>
      </Link>
    </nav>
  </header>
)

export default SiteHeader
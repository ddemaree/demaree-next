import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import DDIcon from './DDIcon'
import getNamespaceFromPath from './getNamespaceFromPath'
import './SiteHeader.scss'

const NavLink = withRouter(({ href, children, className, router }) => {
  let classNames = ['site-nav__link', className]
  let active = false
  
  const currentPathname = getNamespaceFromPath(router.pathname)
  const linkPathname    = getNamespaceFromPath(href)

  if(currentPathname === linkPathname)
    classNames.push('active')

  return (
    <Link href={href}>
      <a className={classNames.join(' ')}>
        <span>{children}</span>
      </a>
    </Link>
  )
})

export const SiteHeader = (props) => (
  <header id="site-header" className="site-header">
    <Link href="/">
      <a className="header-logo">
        <DDIcon />
        <h1>David Demaree</h1>
      </a>
    </Link>
    <nav className="site-nav">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/writing">Writing</NavLink>
      <NavLink href="/photography">Photography</NavLink>
    </nav>
  </header>
)

export default SiteHeader
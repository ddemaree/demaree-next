import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import DDIcon from './DDIcon'
import getNamespaceFromPath from './getNamespaceFromPath'
import './SiteHeader.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

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

const getSiteHeaderClasses = (showThemeSwitch) => {
  let classes = ['site-header']

  if(showThemeSwitch)
    classes.push('with-theme-switcher')

  return classes.join(' ')
}

const SiteHeader = ({ showThemeSwitch, nightMode, toggleTheme }) => 
  <header id="site-header" className={ getSiteHeaderClasses(showThemeSwitch) }>
    <Link href="/">
      <a className="header-logo">
        <DDIcon />
        <h1>David Demaree</h1>
      </a>
    </Link>
    <nav className="site-nav">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/writing">Writing</NavLink>
      {/* <NavLink href="/photography">Photos</NavLink> */}
    </nav>
    {false && showThemeSwitch && 
      <button onClick={e => toggleTheme()} type="button" className="theme-toggle">
        <FontAwesomeIcon icon={nightMode ? faSun : faMoon} />
      </button>}
  </header>

export default SiteHeader
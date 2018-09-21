import React, { Fragment } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import DDIcon from './DDIcon'
import getNamespaceFromPath from './getNamespaceFromPath'
import './SiteHeader.scss'

import Media from 'react-media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const NavLink = withRouter(({ href, children, className, router, listItem }) => {
  let classNames = ['site-nav__link', className]
  let active = false
  
  const currentPathname = getNamespaceFromPath(router.pathname)
  const linkPathname    = getNamespaceFromPath(href)

  if(currentPathname === linkPathname)
    classNames.push('active')

  const linkTags = (
    <Link href={href}>
      <a className={classNames.join(' ')}>
        <span>{children}</span>
      </a>
    </Link>
  )
  
  return (listItem ? <li>{linkTags}</li> : linkTags)
})

const getSiteHeaderClasses = (showThemeSwitch) => {
  let classes = ['site-header']

  if(showThemeSwitch)
    classes.push('with-theme-switcher')

  return classes.join(' ')
}

const SiteNavItems = ({ listItem }) =>
  <Fragment>
    <NavLink href="/" listItem={listItem}>Home</NavLink>
    <NavLink href="/writing" listItem={listItem}>Writing</NavLink>
    {/* <NavLink href="/photography" listItem={listItem}>Photos</NavLink> */}
  </Fragment>

const SiteHeader = ({ showThemeSwitch, nightMode, toggleTheme, mobileMenuOpen, toggleMenu }) => 
  <Fragment>
    <header id="site-header" className={ getSiteHeaderClasses(showThemeSwitch) }>
      <Link href="/">
        <a className="header-logo">
          <DDIcon />
          <h1>David Demaree</h1>
        </a>
      </Link>
      <Media defaultMatches={false} query="(max-width: 600px)">
        <button className="site-nav__toggle" onClick={e => toggleMenu()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </Media>
      <Media defaultMatches={true} query="(min-width: 600px)">
        <nav className="site-nav header-nav">
          <SiteNavItems />
        </nav>
      </Media>
      {false && showThemeSwitch && 
        <button onClick={e => toggleTheme()} type="button" className="theme-toggle">
          <FontAwesomeIcon icon={nightMode ? faSun : faMoon} />
        </button>}
    </header>
    
    <Media defaultMatches={false} query="(max-width: 600px)">
      {mobileMenuOpen && <nav className="site-nav overlay-nav">
        <button className="site-nav__toggle" onClick={e => toggleMenu()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="site-nav__items">
          <SiteNavItems listItem={true} />
        </ul>
      </nav>}
    </Media>
  </Fragment>

export default SiteHeader
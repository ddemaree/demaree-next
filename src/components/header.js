import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import siteData from '../data/site-data.json'

const Header = () => {
  const { title, headerNav } = siteData

  return (
    <header className="grid grid-cols-2 gap-4 p-4 text-ink-medium">
      <div className={'justify-self-start'}>
        <Link to="/">
          <span className={''}>{title}</span>
        </Link>
      </div>
      <nav className={'justify-self-end'}>
        <ul className="flex">
          {headerNav.map(navEntry => (
            <li key={navEntry.url} className="mx-2">
              <Link to={navEntry.url}>{navEntry.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
} 

Header.propTypes = {
  hasFancyHeader: PropTypes.bool,
}

export default Header

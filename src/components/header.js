import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import c from "classnames"

import siteData from '../data/site-data.json'

const Header = ({className}) => {
  const { title, headerNav } = siteData

  return (
    <header className={c(["h-10 text-ink-medium", className])}>
      <div className="dd-wrap">
        <div>
          <Link to="/">
            <span className={'font-semibold no-underline'}>DD</span>
          </Link>
        </div>
      </div>
    </header>
  )
} 

Header.propTypes = {
  hasFancyHeader: PropTypes.bool,
}

export default Header

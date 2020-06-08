import React from "react"
import PropTypes from "prop-types"
import c from "classnames"
import { DDOriginalIcon } from './dd-icon'
import { Link } from "gatsby"

// import siteData from '../data/site-data.json'

const Header = ({className}) => {
  return (
    <header className={c(className, '')}>
      <div className="bg-container h-12 flex justify-between">
        <div style={{height:'1rem'}}>
          <Link to="/"><DDOriginalIcon /></Link>
        </div>
        <div className="text-sm absolute h-12 flex items-center pr-6 right-0 top-0 z-10">
          <a href="#">
            <i className="fas fa-bars"></i>
            <span className="hidden">Menu</span>
          </a>
        </div>
      </div>
    </header>
  )
} 

Header.propTypes = {
  hasFancyHeader: PropTypes.bool,
}

export default Header

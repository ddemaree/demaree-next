import React from "react"
import PropTypes from "prop-types"
import c from "classnames"
import { DDIcon } from './dd-icon'
import { Link } from "gatsby"

const Header = ({className}) => {
  return (
    <header className={c(className, '')}>
      <div className="bg-container h-12 flex justify-between px-4 dark:text-white dark:bg-black">
        <Link className="h-full flex items-center text-inherit" to="/">
          <DDIcon className="p-1 rounded border border-current h-10" />
        </Link>
        <div className="text-sm absolute h-12 flex items-center pr-6 right-0 top-0 z-10">
          {/* <a href="#" className="text-inherit">
            <i className="fas fa-bars"></i>
            <span className="hidden">Menu</span>
          </a> */}
        </div>
      </div>
    </header>
  )
} 

Header.propTypes = {
  hasFancyHeader: PropTypes.bool,
}

export default Header

import React from "react"
import PropTypes from "prop-types"
import c from "classnames"
import { DDOriginalIcon } from './dd-icon'
import { Link } from "gatsby"

// import siteData from '../data/site-data.json'

const Header = ({className}) => {
  // const { title, headerNav } = siteData

  return (
    <header className={c([className])}>
      <div>
        <div className="" style={{height:'2rem'}}>
          <Link to="/"><DDOriginalIcon /></Link>
        </div>

        {/* <div>
          <Link to="/">
            <span className={'font-semibold no-underline'}>DD</span>
          </Link>
        </div> */}
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

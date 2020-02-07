import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Icon from './dd-icon'

import c from 'classnames'
// import styles from './header.module.scss'

const Header = ({ hasFancyHeader }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      ghostSettings {
        title
        navigation {
          label
          url
        }
      }
    }
  `)

  const { title, navigation } = data.ghostSettings

  return (
    <header className="grid grid-cols-2 gap-4 p-4">
      <div className={'justify-self-start'}>
        <Link to="/">
          {/* <Icon className={''} /> */}
          <span className={''}>{title}</span>
        </Link>
      </div>
      <nav className={c('justify-self-end')}>
        <ul className="flex">
          {navigation.map(navEntry => (
            <li key={navEntry.url}>
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

Header.defaultProps = {
  hasFancyHeader: false
}

export default Header

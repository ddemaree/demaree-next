import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Icon from './dd-icon'

import c from 'classnames'
import styles from './header.module.scss'

const Header = ({ hasFancyHeader, menuContent }) => {
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
    <header className={c([
      'ph4 mt3 mb5',
      styles.header,
      (hasFancyHeader && styles.hasFeatureImage)
    ])}>
      <div
        className={c(styles.headerInner)}
      >
        <div className={styles.logo}>
          <Link to="/">
            <Icon className={styles.logoIcon} />
            <span className={styles.logoText}>{title}</span>
          </Link>
        </div>
        <nav className={c(styles.navigation)}>
          <ul>
            {navigation.map(navEntry => (
              <li key={navEntry.url}>
                <Link to={navEntry.url}>{navEntry.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {menuContent}
      </div>
    </header>
  )
} 

Header.propTypes = {
  hasFancyHeader: PropTypes.bool,
  menuContent: PropTypes.node
}

Header.defaultProps = {
  hasFancyHeader: false
}

export default Header

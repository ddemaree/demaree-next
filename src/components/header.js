import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import c from 'classnames'
import styles from './header.module.scss'

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
    <header className={c([
      styles.header,
      (hasFancyHeader && styles.hasFeatureImage)
    ])}>
      <div
        className={c(styles.headerInner)}
      >
        <div className={styles.logo}>
          <Link to="/">{title}</Link>
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
      </div>
    </header>
  )
} 

Header.propTypes = {
  hasFancyHeader: PropTypes.bool
}

Header.defaultProps = {
  hasFancyHeader: false
}

export default Header

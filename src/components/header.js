import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import c from 'classnames'
import styles from './header.module.scss'

const Header = ({ siteTitle, hasFeatureImage }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      ghostSettings {
        title
        description
        navigation {
          label
          url
        }
      }
    }
  `)

  const { title, description, navigation } = data.ghostSettings

  return (
    <header className={c([
      styles.header,
      (hasFeatureImage && styles.hasFeatureImage)
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
  siteTitle: PropTypes.string,
  hasFeatureImage: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

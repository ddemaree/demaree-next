/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"
import Footer from "./footer"

import "../sass_includes/global.scss"

import c from 'classnames'
import styles from "./layout.module.scss"

import favicon16 from '../images/dd-favicon-16.png'
import favicon32 from '../images/dd-favicon-32.png'
import favicon64 from '../images/dd-favicon-64.png'

const Layout = ({ children, pageTitle, mainClassName, hasFancyHeader }) => {
  const [theme, setTheme] = useState('system')
  // const [themeMenuOpen, setThemeMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      ghostSettings {
        title
        description
        codeinjection_head
        codeinjection_foot
        codeinjection_styles
        icon
        navigation {
          label
          url
        }
      }
    }
  `)

  return (
    <div className={c([
      styles.mainLayout,
    ])}>
      <Helmet 
        titleTemplate={`%s – ${data.ghostSettings.title}`} 
        defaultTitle={data.ghostSettings.title}>
        {pageTitle && <title>{pageTitle}</title>}
        <link rel="stylesheet" href="https://use.typekit.net/yax1qaz.css" />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
        <link rel="shortcut icon" type="image/png" href={favicon64} />
        <body className={`theme-${theme}`} />
      </Helmet>

      <Header hasFancyHeader={hasFancyHeader} />

      <main className={c([mainClassName, styles.mainContent])}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  mainClassName: PropTypes.string
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"
import Footer from "./footer"

import "../sass_includes/global.scss"

import c from 'classnames'
import layoutStyles from "./layout.module.scss"

const Layout = ({ children, mainClassName, hasFancyHeader }) => {
  const [theme, setTheme] = useState('system')
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)')) {
      console.log('Prefers dark mode')
    }
  })

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

  const handleMenuChange = e => {
    setTheme(e.target.value)
  }

  const ThemeSelectRadio = ({ themeOption }) => (
    <input type="radio" name="theme-select" value={themeOption} checked={theme === themeOption} onChange={handleMenuChange} />
  )

  const ThemeMenuOption = ({ theme, label }) => (
    <div>
      <label>
        <ThemeSelectRadio themeOption={theme} />
        <span>{label}</span>
      </label>
    </div>
  )

  return (
    <div className={c([
      layoutStyles.mainLayout,
    ])}>
      <Helmet 
        titleTemplate={`%s – ${data.ghostSettings.title}`} 
        defaultTitle={data.ghostSettings.title}>
        <link rel="stylesheet" href="https://use.typekit.net/yax1qaz.css" />
        <body className={`theme-${theme}`} />
      </Helmet>

      <Header 
        hasFancyHeader={hasFancyHeader}
        menuContent={(
          <div className={`theme-menu`} style={{position: 'relative'}}>
            <button onClick={e => setThemeMenuOpen(true)}>Themes</button>
            {themeMenuOpen && <div className="" style={{position: 'absolute', width: '320px', backgroundColor: 'var(--color-background)', top: '0', color: 'var(--color-text)'}}>
              <div>
                <button onClick={e => setThemeMenuOpen(false)}>Close</button>
              </div>

              <ThemeMenuOption theme="system" label="Use system theme" />
              <ThemeMenuOption theme="light"  label="Light theme" />
              <ThemeMenuOption theme="dark"  label="Dark theme" />
            </div>}
          </div>
        )} />

      <main className={c([mainClassName, layoutStyles.mainContent])}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainClassName: PropTypes.string
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"
import Footer from "./footer"

import "../sass_includes/global.scss"

import c from 'classnames'
import layoutStyles from "./layout.module.scss"

const Layout = ({ children, mainClassName, hasFancyHeader }) => {
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
      layoutStyles.mainLayout,
    ])}>
      <Helmet 
        titleTemplate={`%s – ${data.ghostSettings.title}`} 
        defaultTitle={data.ghostSettings.title}>
        <link rel="stylesheet" href="https://use.typekit.net/yax1qaz.css" />
      </Helmet>

      <Header hasFancyHeader={hasFancyHeader} />

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

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
import "./layout.scss"
import "../sass_includes/tachyons.scss"

const Layout = ({ children }) => {
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
    <>
      <Helmet 
        titleTemplate={`%s – ${data.ghostSettings.title}`} 
        defaultTitle={data.ghostSettings.title}>
        <link rel="stylesheet" href="https://use.typekit.net/yax1qaz.css" />
      </Helmet>

      <Header siteTitle={data.ghostSettings.title} />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

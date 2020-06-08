import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

import Header from "./header"
import Footer from "./footer"

import "./global.css"
import c from 'classnames'

import favicon16 from '../images/dd-favicon-16.png'
import favicon32 from '../images/dd-favicon-32.png'
import favicon64 from '../images/dd-favicon-64.png'
import favicon128 from '../images/dd-favicon-128.png'

const Layout = ({ children, pageTitle, mainClassName, headerClassName, omitHeader }) => {

  return (
    <div className="dd-container flex flex-col min-h-screen">
      <Helmet 
        titleTemplate={`%s – David Demaree`} 
        defaultTitle={`David Demaree`}>
        <html lang="en-US" />
        <body className="dd-dark-mode" />
        {pageTitle && <title>{pageTitle}</title>}
        <link rel="stylesheet" type="text/css" href="/fa/css/all.min.css" />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
        <link rel="shortcut icon" type="image/png" href={favicon64} />
        <link rel="apple-touch-icon" type="image/png" href={favicon128} />
      </Helmet>

      {!omitHeader && <Header className={headerClassName} />}

      <main className={c(['overflow-hidden flex-1', mainClassName])}>
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

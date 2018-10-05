// Import main stylesheet
import "../styles/main.scss"

// Components used here
import React from 'react'
import App, {Container} from 'next/app'
import Router from 'next/router'
import Helmet from 'react-helmet'
import SiteLayout from '../src/SiteLayout'

// Helper functions
import getNamespaceFromPath from '../src/getNamespaceFromPath'

// Icons and shit
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faPaperPlane, faTwitter, faInstagram, faMedium, faGithub, faLinkedin)


export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    let layoutProps = {}

    layoutProps.pageName = getNamespaceFromPath(ctx.pathname)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)

      if(pageProps.layout) {
        layoutProps = Object.extend({}, layoutProps, pageProps.layout)
      }
    }

    return { pageProps, layoutProps }
  }

  render () {
    const { Component, pageProps, layoutProps } = this.props

    return <Container className="site-container">
      <Helmet
        defaultTitle="David Demaree‘s web site"
        titleTemplate="%s • David Demaree‘s web site">
        <meta name="viewport" content="initial-scale=1, width=device-width"  />
      </Helmet>
      <SiteLayout {...layoutProps}>
        <Component {...pageProps} />
      </SiteLayout>
    </Container>
  }
}
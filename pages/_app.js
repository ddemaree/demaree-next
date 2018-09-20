import React from 'react'
import App, {Container} from 'next/app'
import SiteLayout from '../src/SiteLayout'
import "../styles.scss"

import Router from 'next/router'
import getNamespaceFromPath from '../src/getNamespaceFromPath'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faStroopwafel)
library.add(faTwitter, faInstagram, faMedium, faGithub, faLinkedin)

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

    return <Container>
      <SiteLayout {...layoutProps}>
        <Component {...pageProps} />
      </SiteLayout>
    </Container>
  }
}
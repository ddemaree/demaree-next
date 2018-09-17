import React from 'react'
import App, {Container} from 'next/app'
import SiteLayout from '../src/SiteLayout'
import "../styles.scss"

import Router from 'next/router'
import getNamespaceFromPath from '../src/getNamespaceFromPath'

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
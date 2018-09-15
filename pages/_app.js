import React from 'react'
import App, {Container} from 'next/app'
import SiteLayout from '../src/SiteLayout'
import "../styles.scss"

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    console.log("Getting initial props for ctx ", ctx)
    let pageProps = {}
    let layoutProps = {}

    // Insert top level path info into layoutProps, to determine section
    let topLevelPaths = ctx.pathname.split('/').slice(1)
    if(topLevelPaths.length === 0 || topLevelPaths[0] === '') {
      topLevelPaths.splice(0, 1, 'index')
    }
    layoutProps.pageName = topLevelPaths[0]

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
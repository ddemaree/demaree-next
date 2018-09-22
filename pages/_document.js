import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

export default class extends Document {

  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHTMLAttrs() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrs() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (<Helmet
      htmlAttributes={{lang: 'en'}}
      defaultTitle="David Demaree's web site"
      titleTemplate="%s | David Demaree's web site"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Hello next.js!' }
      ]}
    />)
  }

  render() {
    return (
      <html>
        <Head>
          {/* { this.helmetJsx } */}
          { this.helmetHeadComponents }
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/68698/6863392/css/fonts.css" />
          <link rel="stylesheet" href="https://use.typekit.net/hpk3qlq.css" />
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
        </Head>
        <body className="gridster">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
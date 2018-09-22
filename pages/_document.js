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

  render() {
    return (
      <html>
        <Head>
          { this.helmetHeadComponents }
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/68698/6863392/css/fonts.css" />
          <link rel="stylesheet" href="https://use.typekit.net/hpk3qlq.css" />
        </Head>
        <body className="gridster">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="stylesheet" href="https://use.typekit.net/hpk3qlq.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="gridster">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
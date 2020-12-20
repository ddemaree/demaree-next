import Head from 'next/head'
import '../_assets/styles/global.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>David Demaree's site</title>
      <link href="/fonts/soehne/index.css" rel="stylesheet" />
      <link href="/fonts/soehne-breit/index.css" rel="stylesheet" />
      <link href="/fonts/ivar-text/index.css" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
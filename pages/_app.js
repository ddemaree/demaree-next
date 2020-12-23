import Head from 'next/head'
import '../_assets/styles/global.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>David Demaree's site</title>
      <link href="/fonts/soehne/index.css" rel="stylesheet" />
      <link href="/fonts/soehne-breit/index.css" rel="stylesheet" />
      <link href="/fonts/ivar-text/index.css" rel="stylesheet" />
      <link href="//fonts.googleapis.com/css2?fonts/ivar-text/index.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="//fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=JetBrains+Mono:wght@300..700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
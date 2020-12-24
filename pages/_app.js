import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import { DefaultMetaTags } from '../components/MetaTags';

import '../_assets/styles/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isProd = (process.env.NODE_ENV === 'production')

  if(isProd) {
    useEffect(() => {
      // Initialize Fathom when the app loads
      Fathom.load('TOFIAIKB', {
        includedDomains: ['demaree.me'],
      })

      function onRouteChangeComplete() {
        Fathom.trackPageview()
      }
      // Record a pageview when route changes
      router.events.on('routeChangeComplete', onRouteChangeComplete)

      // Unassign event listener
      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete)
      }
    }, [])
  }

  return <>
    <Head>
      <title>David Demaree's site</title>
      <DefaultMetaTags />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="//fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=JetBrains+Mono:wght@300..700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />
      <link href="/fonts/soehne/index.css" rel="stylesheet" />
      <link href="/fonts/soehne-breit/index.css" rel="stylesheet" />
      <link href="/fonts/ivar-text/index.css" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
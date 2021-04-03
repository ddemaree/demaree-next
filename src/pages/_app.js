import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet'
import { CloudinaryContext } from "cloudinary-react";
import * as Fathom from 'fathom-client'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faArrowRight, faCocktail, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight, faAngleRight, faCoffee, faCocktail)

import '../components/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

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

  const [darkMode, setDarkMode] = useState(false)
  const onDarkModeChange = e => {
    console.log("Dark mode changed: ", e.matches)
    setDarkMode(e.matches)
  }
  
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(darkModeQuery.matches)
    darkModeQuery.addEventListener('change', onDarkModeChange)
    return () => { darkModeQuery.removeEventListener('change', onDarkModeChange) }
  }, [])

  useEffect(() => {
    dom.watch()
  }, [])

  const defaultTitle = "David Demaree‘s site" 
  const defaultDescription = "A good man, and thorough. NYC-based tech person, writer, coder, photographer, et al." 

  return <>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s • ${defaultTitle}`}
    >
      {/* <body /> */}

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta name="twitter:site" content="@ddemaree" />
      <meta name="twitter:creator" content="@ddemaree" />
      <meta name="author" content="David Demaree" />
      <meta property="article:author" content="https://demaree.me" />
      <meta name="twitter:card" value="summary" />

      <meta name="description" content={defaultDescription} />
      <meta property="og:description" content={defaultDescription} />
      <meta name="twitter:description" content={defaultDescription} />
      {darkMode && <meta name="twitter:widgets:theme" content="dark" />}

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="//fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=JetBrains+Mono:wght@300..700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://cdn.demaree.net" />
      {['soehne', 'soehne-breit', 'soehne-mono', 'ivar-text'].map(key => <link href={`https://cdn.demaree.net/fonts/${key}/index.css`} rel="stylesheet" key={key} />)}

      <link rel='dns-prefetch' href='//c0.wp.com' />
      <link rel='stylesheet' id='wp-block-library-css'  href='https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css' media='all' />

    </Helmet>
    <CloudinaryContext cloudName="demaree" secure="true">
      <Component {...pageProps} />
    </CloudinaryContext>
  </>
}

export default MyApp
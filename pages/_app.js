import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet'
import * as Fathom from 'fathom-client'

// import '../_assets/styles/global.css';

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

  const defaultTitle = "David Demaree‘s site" 
  const defaultDescription = "A good man, and thorough. NYC-based tech person, writer, coder, photographer, et al." 

  return <>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s • ${defaultTitle}`}
    >
      <body className="dark:dd-inkMedium-gray-400 dark:dd-ink-gray-300 dark:dd-inkLight-gray-700 dark:dd-surface-black dark:dd-inkBold-white dark:dd-accent-red-400" />
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

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="//fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=JetBrains+Mono:wght@300..700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />
      <link href="/fonts/soehne/index.css" rel="stylesheet" />
      <link href="/fonts/soehne-breit/index.css" rel="stylesheet" />
      <link href="/fonts/ivar-text/index.css" rel="stylesheet" />
      {darkMode && <meta name="twitter:widgets:theme" content="dark" />}
    </Helmet>
    <Component {...pageProps} />
  </>
}

export default MyApp
import React, { useEffect } from 'react'
import Link from "next/link";
import c from 'classnames';
import SocialLinks from "./SocialLinks";
import SiteHeader from "./SiteHeader";
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faArrowRight, faCocktail, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet';

library.add(faArrowRight, faAngleRight, faCoffee, faCocktail)


function Layout({ children, wrapperClassName, mainClassName, activeNav, hideFooterSocials, pageTitle, pageDescription }) {
  useEffect(() => {
    dom.watch()
  }, [])

  return <>
    <Helmet
      titleTemplate="%s • David Demaree's site"
      defaultTitle="David Demaree's site">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="//fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=JetBrains+Mono:wght@300..700&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://cdn.demaree.net" />
      {['soehne', 'soehne-breit', 'soehne-mono', 'ivar-text', 'source-serif-4/vf'].map(key => <link href={`https://cdn.demaree.net/fonts/${key}/index.css`} rel="stylesheet" key={key} />)}
    </Helmet>
    <div className={c(wrapperClassName, "text-ink bg-background flex flex-col min-h-screen")}>
      <SiteHeader activeNav={activeNav} />
      <main className={mainClassName}>
        {children}
      </main>
      <footer className="p-8 pb-24 text-center">
        {!hideFooterSocials && <div className="mb-8"><SocialLinks /></div>}
        <div>"Have courage, and be kind"</div>
        <div>&copy; 2021— David Demaree</div>
        <div className="mt-4"><Link href="/typography-test"><a className="text-sm text-ink-light">View Style Guide</a></Link></div>
      </footer>
    </div>
  </>
}

export default Layout
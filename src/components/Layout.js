import React from 'react'
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import cn from 'classnames'

import '../css/main-gatsby.css';

function Layout({ pageClasses, children }) {
  return <>
    <Helmet 
      htmlAttributes={{className: "bg-surface"}}
      titleTemplate="%s — David Demaree" 
      defaultTitle="David Demaree">
      {["soehne", "soehne-breit", "ivar-text", "roslindale"].map(set => <link key={set} data-dd-fontset={set} rel="stylesheet" href={`https://cdn.demaree.net/fonts/${set}/index.css`} type="text/css" />)} 
      <script src="https://kit.fontawesome.com/f0afb61fe2.js" crossorigin="anonymous"></script>
    </Helmet>
    <div className={cn("dd-page bg-surface text-ink flex flex-col min-h-screen", pageClasses)}>
      <header className="site-header grid grid-cols-6 px-4 xs:px-6 items-center h-20">
        <Link to="/" className="justify-self-start whitespace-nowrap">
          <i className="fas fa-home"></i>
          <span className="ml-1 font-medium">Home</span>
        </Link>
        <Link to="/" className="text-inkBold col-start-3 col-span-2 justify-self-center font-sans-display font-medium uppercase tracking-widest flex items-center">
          <span className="text-4xl relative z-50">
            <i className="fak fa-dd-logo-square"></i>
          </span>
          <span className="sr-only ml-3">David Demaree</span>
        </Link>
      </header>
      <div className="flex-1">
        {children}
      </div>
      <footer className="pt-16 text-center pb-16 text-inkMedium">
        <p className="text-lg font-serif mb-1">&ldquo;Have courage, and be kind.&rdquo;</p>
        <p>&copy;2021— David Demaree</p>
      </footer>
    </div>
  </>
}

export default Layout
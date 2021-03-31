// import { useEffect, useState } from "react";
// import Head from 'next/head';
import Link from "next/link";
import NewIcon from "./Icons";
import c from 'classnames';
import SocialLinks from "./SocialLinks";
import { CloudinaryContext } from "cloudinary-react";
import { Helmet } from "react-helmet";

function NavItem({ active, href, label }) {
  const wrapperClasses = c([
    'mx-3 first:ml-0'
  ])

  const linkClasses = c([
    'py-1 px-1 border-b-2 hover:text-inkBold',
    (active && 'font-semibold text-inkBold border-inkBold'),
    (!active && 'border-transparent text-ink')
  ])

  return <li className={wrapperClasses}>
    <Link href={href}><a className={linkClasses}>{label}</a></Link>
  </li>
}

function Layout({ children, wrapperClassName, mainClassName, activeNav, hideFooterSocials, pageTitle, pageDescription }) {
  return <>
    <Helmet>
      <link rel='dns-prefetch' href='//c0.wp.com' />
      <link rel='stylesheet' id='wp-block-library-css'  href='https://c0.wp.com/c/5.7/wp-includes/css/dist/block-library/style.min.css' media='all' />
    </Helmet>
    <CloudinaryContext cloudName="demaree">
    <div className={c(wrapperClassName, "text-ink bg-surface flex flex-col min-h-screen")}>

      <header className="px-8 py-6 flex justify-between">
        <Link href="/">
          <a>
            <NewIcon className="w-8 h-8 text-inkBold" />
          </a>
        </Link>
        <nav>
          <ul className="flex">
            <NavItem label="Home" href="/" active={(activeNav === "home")} />
            <NavItem label="About" href="/about-me" active={(activeNav === "about-me")} />
            {/* <NavItem label="Archives" href="/archives" active={(activeNav === "archives")} /> */}
          </ul>
        </nav>
      </header>
      <main className={mainClassName}>
        {children}
      </main>
      <footer className="p-8 pb-24 text-center">
        {!hideFooterSocials && <div className="mb-8"><SocialLinks /></div>}
        <div>"Have courage, and be kind"</div>
        <div>&copy; 2020 David Demaree</div>
        <div className="mt-4"><Link href="/__style-guide"><a className="text-sm text-inkLight">View Style Guide</a></Link></div>
      </footer>
    </div>
    </CloudinaryContext>
  </>
}

export default Layout
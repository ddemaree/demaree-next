import React from 'react'
import { Link } from 'gatsby';
import c from 'classnames';
import DDIcon from './DDIcon';
// import Link from "next/link";

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

export default function SiteHeader({ activeNav }) {
  return <header className="dd-site-header px-6 py-6 mb-8 h-14 flex justify-between items-center">
    <Link href="/">
      <a className="text-ink-bold text-4xl">
        <DDIcon />
        <span className="sr-only">David Demaree</span>
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
}
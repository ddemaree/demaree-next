import Link from "next/link";
import c from 'classnames';
import DDIcon from './DDIcon';

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
  return <header className="px-8 py-6 flex justify-between">
    <Link href="/">
      <a>
        <DDIcon />
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
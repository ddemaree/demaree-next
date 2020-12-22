import Head from 'next/head';
import Link from "next/link";
import NewIcon from "./Icons";
import c from 'classnames';
import { useEffect, useState } from "react";

function Layout({ children, wrapperClassName, mainClassName }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  })

  return <div className="dark:dd-inkMedium-gray-400 dark:dd-ink-gray-300 dark:dd-inkLight-gray-700 dark:dd-surface-black dark:dd-inkBold-white dark:dd-accent-red-400">
    <Head>
      {darkMode && <meta name="twitter:widgets:theme" content="dark" />}
    </Head>
    <div className={c(wrapperClassName, "text-ink bg-surface flex flex-col min-h-screen")}>
      <header className="p-8 flex justify-between">
        <Link href="/">
          <a>
            <NewIcon className="w-8 h-8 text-inkBold" />
          </a>
        </Link>
        <nav>
          <ul className="flex">
            <li className="mx-4 first:ml-0"><Link href="/about-me">About</Link></li>
            <li className="mx-4 first:ml-0"><Link href="/archives">Archives</Link></li>
          </ul>
        </nav>
      </header>
      <main className={mainClassName}>
        {children}
      </main>
      <footer className="p-8 pb-24 text-center">
        <div>"Have courage, and be kind"</div>
        <div>&copy; 2020 David Demaree</div>
        <div className="mt-4"><Link href="/__style-guide"><a className="text-sm text-inkLight">View Style Guide</a></Link></div>
      </footer>
    </div>
  </div>
}

export default Layout
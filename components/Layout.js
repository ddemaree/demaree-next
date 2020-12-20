import Link from "next/link";
import NewIcon from "./Icons";
import c from 'classnames';

function Layout({ children, wrapperClassName, mainClassName }) {
  return <div className="dark:dd-inkMedium-gray-400 dark:dd-ink-gray-300 dark:dd-surface-black dark:dd-inkBold-white dark:dd-accent-red-400">
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
      </footer>
    </div>
  </div>
}

export default Layout
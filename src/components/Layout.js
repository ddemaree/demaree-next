import Link from "next/link";
import c from 'classnames';
import SocialLinks from "./SocialLinks";
import SiteHeader from "./SiteHeader";

function Layout({ children, wrapperClassName, mainClassName, activeNav, hideFooterSocials, pageTitle, pageDescription }) {
  return <>
    <div className={c(wrapperClassName, "text-ink bg-background flex flex-col min-h-screen")}>
      <SiteHeader activeNav={activeNav} />
      <main className={mainClassName}>
        {children}
      </main>
      <footer className="p-8 pb-24 text-center">
        {!hideFooterSocials && <div className="mb-8"><SocialLinks /></div>}
        <div>"Have courage, and be kind"</div>
        <div>&copy; 2021— David Demaree</div>
        <div className="mt-4"><Link href="/__style-guide"><a className="text-sm text-inkLight">View Style Guide</a></Link></div>
      </footer>
    </div>
  </>
}

export default Layout
import React from "react"
import { Link } from "gatsby"
import Hero from './hero'

const Footer = ({showHeroFooter}) => {
  return (
    <footer className={`text-ink-bold mt-6 pt-4 pb-6`}>
      <div className="dd-wrap">
        {showHeroFooter && <Hero />}
        <div className="text-center text-ink-medium mt-4">
          <p className="font-serif mb-0">&ldquo;Have courage, and be kind&rdquo;</p>
          <p className="text-xs mt-2 mb-0">© {new Date().getFullYear()}— David Demaree
          </p>
          <p className="text-ink-low text-xs">
            <Link to="/typography-test" className="xs:block text-ink-low">Style guide</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  showHeroFooter: true
}

export default Footer
import React from "react"
import Hero from './hero'
import _c from 'classnames'

const Footer = ({ showHeroFooter }) => {
  return (
    <footer className={_c(
      `text-ink-bold mt-6 pb-10`,
      (showHeroFooter && `bg-container-footer pt-6`)
    )}>
      <div className="dd-wrap">
        {showHeroFooter && <Hero />}

        <div className="text-center text-sm text-ink-medium mt-4">
          <p className="mb-0">&ldquo;Have courage, and be kind&rdquo;</p>
          <p className="mb-0">© {new Date().getFullYear()} David Demaree, all rights reserved.
          </p>
          {/* <div><a href="#">&uarr; Back to top</a></div> */}
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  showHeroFooter: true
}

export default Footer
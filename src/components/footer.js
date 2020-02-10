import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import socials from '../data/socials.json'
import c from 'classnames'

const scrollToTop = e => {
  e.preventDefault();
  window.scrollTo(0,0);
}

const FooterItem = ({ icon, children, href, linkTo, onClick, className }) => {

  return (
    <li className={c(['mr-3 mb-1 xxs:w-1/2 xxs:mx-0 xxs:my-1 xs:text-xl', className])}>
      {linkTo && <Link to={linkTo}>
        {icon && <FontAwesomeIcon icon={icon} className="text-ink-low mr-1 text-sm" />}
        {children}
      </Link>}
      {!linkTo && <a href={href} onClick={onClick}>
        {icon && <FontAwesomeIcon icon={icon} className="text-ink-low mr-1 text-sm" />}
        {children}
      </a>}
    </li>
  )
}

FooterItem.defaultProps = {
  href: '#'
}

const Footer = () => {

  return (
    <footer className={`bg-container text-ink-bold mt-6 p-6 pb-10`}>
      <div className="max-w-content box-content mx-auto">
        <nav>
          
          <h3 className={`mb-1 font-semibold font-serif`}>Here</h3>
          <ul className={`flex flex-wrap list p-0 m-0`}>
            <FooterItem onClick={scrollToTop} icon="arrow-circle-up">
              Back to top
            </FooterItem>
            <FooterItem icon="home" linkTo="/">
              Home
            </FooterItem>
          </ul>

          <h3 className={`mt-2 xs:mt-5 mb-1 font-semibold font-serif`}>Elsewhere</h3>
          <ul className={`flex flex-wrap list p-0 m-0`}>
            {socials.map(social => 
              <FooterItem key={social.text} 
                href={social.url}
                icon={[(social.iconset || 'fab'), social.icon]}>
                { social.text }
              </FooterItem>
            )}
          </ul>
        </nav>
        <div className="text-ink-medium text-sm mt-4">
          <p className={`i ma0`}>&ldquo;Have courage, and be kind&rdquo;</p>
          <p className={`ma0 dd-f-300`}>
          © {new Date().getFullYear()}— David Demaree
          <span className="mx-2 xs:hidden">{'•'}</span>
          <Link to="/__style-guide" className="xs:block">Style guide</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
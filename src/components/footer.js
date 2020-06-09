import React from "react"
import { Link } from "gatsby"

import c from 'classnames'

import socials from '../data/socials.json'

const FooterItem = ({ icon, text, href, linkTo, onClick, className }) => {
  const [ iconSetName, iconName ] = icon

  const linkChildren = <>
    {(icon && 
    <i className={c(['text-ink-low md:text-sm', iconSetName, `fa-${iconName}`])}></i>)}
    <span className="hidden ml-2">{text}</span>  
  </>

  return (
    <li className={c(['mr-3 last:mr-0 mb-1', className])}>
      {linkTo && <Link to={linkTo}>
        {linkChildren}
      </Link>}
      {!linkTo && <a href={href} onClick={onClick}>
        {linkChildren}
      </a>}
    </li>
  )
}

FooterItem.defaultProps = {
  href: '#'
}

const Footer = () => {

  return (
    <footer className={`text-ink-bold mt-6 pt-4 pb-6`}>
      <div className="dd-wrap text-center">
        <nav>
          <ul className={`justify-center list p-0 m-0 flex flex-wrap`}>
            {socials.map(social => 
              <FooterItem key={social.text} 
                href={social.url}
                icon={[(social.iconset || 'fab'), social.icon]}
                text={social.text} />
            )}
          </ul>
        </nav>
        <div className="text-ink-medium mt-4">
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

export default Footer
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Memoji from './memoji'

import c from 'classnames'
import styles from './hero.module.css'

const socialData = [
  {
    "linkTo": "/about-me",
    "text": "About Me",
    "alt": "Bio for David Demaree",
    "iconset": "fas",
    "icon": "user"
  },
  {
    "url": "https://twitter.com/ddemaree",
    "text": "Twitter",
    "alt": "@ddemaree on Twitter",
    "icon": "twitter"
  },
  {
    "url": "https://instagram.com/ddemaree",
    "text": "Instagram",
    "alt": "@ddemaree on Instagram",
    "icon": "instagram"
  }
]

const SocialItem = ({ icon, text, altText, href, linkTo, onClick, className }) => {
  const [ iconSetName, iconName ] = icon

  const linkChildren = <>
    {(icon && 
    <i className={c(['text-ink-medium', iconSetName, `fa-${iconName}`])}></i>)}
    <span className="ml-1 font-semibold">{text}</span>
  </>

  return (
    <li className={c(['mr-3 last:mr-0 mb-1', styles.navLink, className])}>
      {linkTo && <Link title={altText} to={linkTo} children={linkChildren} />}
      {!linkTo && <a href={href} rel="me" title={altText} children={linkChildren} />}
    </li>
  )
}

SocialItem.defaultProps = {
  href: '#'
}

const Hero = ({ homepage }) => {
  return <div className={c(styles.heroUnit, (homepage && styles.onHomepage))}>
    <div className={c(styles.memoji)}>
      <Memoji className={c(`m-0`, styles.memojiFigure)} />
    </div>
    <div className={c(styles.miniBio)}>
      <b>David Demaree</b> is a product manager, designer, and writer based in New Jersey.
    </div>
    <nav className={styles.navGroup}>
      <ul className={styles.navGroupInner}>
        {socialData.map(social => 
          <SocialItem key={social.text} 
            href={social.url}
            linkTo={social.linkTo}
            icon={[(social.iconset || 'fab'), social.icon]}
            text={social.text} />
        )}
      </ul>
    </nav>

  </div>
}

Hero.defaultProps = {
  homepage: false
}

Hero.propTypes = {
  homepage: PropTypes.bool
}

export default Hero
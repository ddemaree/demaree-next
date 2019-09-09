
import React from "react"
import { Link } from "gatsby"

import socials from '../data/socials.json'
import styles from './footer.module.scss'

const Footer = ({}) => {

  return (
    <footer className={styles.footer}>
      <nav className={styles.elsewhere}>
        <h3>Elsewhere</h3>
        <ul>
          {socials.map(social => 
            <li key={social.text}>
              <a href={social.url}>{social.text}</a>
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.footerContent}>
        <p className={styles.saying}>&ldquo;Have courage, and be kind&rdquo;</p>
        <p className={styles.copyright}>
        © {new Date().getFullYear()}— David Demaree
        {' • '}
        <Link to="/style-guide">Style guide</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
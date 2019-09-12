
import React from "react"
import { Link } from "gatsby"

import socials from '../data/socials.json'

const Footer = ({}) => {

  return (
    <footer className={`mt5 mb3 ph4`}>
      <nav className={`mb3`}>
        <h3 className={`ma0 mb2 dd-fs-micro--bold dd-accent`}>Elsewhere</h3>
        <ul className={`flex list pa0 ma0`}>
          {socials.map(social => 
            <li className="mr3" key={social.text}>
              <a href={social.url}>{social.text}</a>
            </li>
          )}
        </ul>
      </nav>
      <div>
        <p className={`i ma0`}>&ldquo;Have courage, and be kind&rdquo;</p>
        <p className={`ma0 dd-fs-300`}>
        © {new Date().getFullYear()}— David Demaree
        {' • '}
        <Link to="/style-guide">Style guide</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer

import React from "react"
import { Link } from "gatsby"

import socials from '../data/socials.json'

const Footer = () => {

  return (
    <footer className={`bg-container mt-6 p-5 pb-10`}>
      <div className="max-w-content box-content mx-auto">
        <nav className={`mb-3`}>
          <h3 className={`mb-2 font-semibold font-serif`}>Elsewhere</h3>
          <ul className={`flex flex-wrap list p-0 m-0`}>
            {socials.map(social => 
              <li className="mr-2" key={social.text}>
                <a href={social.url}>{social.text}</a>
              </li>
            )}
          </ul>
        </nav>
        <div>
          <p className={`i ma0`}>&ldquo;Have courage, and be kind&rdquo;</p>
          <p className={`ma0 dd-f-300`}>
          © {new Date().getFullYear()}— David Demaree
          {' • '}
          <Link to="/style-guide">Style guide</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
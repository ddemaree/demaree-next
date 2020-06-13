import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import c from 'classnames'

import socials from '../data/socials.json'

const SocialItem = ({ icon, text, href, linkTo, onClick, className }) => {
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

SocialItem.defaultProps = {
  href: '#'
} 

const Hero = ({ className }) => {
  const { memoji, shortBio } = useStaticQuery(graphql`
    query HeroQuery {
      shortBio: wordpressWpFragments(slug: {eq: "short-bio"}) {
        content
      }
      memoji: file(relativePath: {regex: "/memoji.png/"}) {
        img: childImageSharp {
          fixed(width: 200, pngQuality: 10, webpQuality: 10, base64Width: 10) {
            srcWebp
            src
            base64
            aspectRatio
            srcSet
          }
        }
      }
    }
  `)

  return <div>
    <div className={c(["flex flex-wrap items-center", className])}>
      <figure className="w-16 m-0 mr-4 col-span-3">
      {memoji && <img alt="Cartoon portrait of David Demaree" src={memoji.img.fixed.src} className="max-w-full" />}
      </figure>
      <div className="my-4 max-w-md text-2xl leading-tight font-normal col-span-9" dangerouslySetInnerHTML={{__html: shortBio.content}} />
    </div>
    <nav>
      <ul className={`justify-center list p-0 m-0 flex flex-wrap`}>
        {socials.map(social => 
          <SocialItem key={social.text} 
            href={social.url}
            icon={[(social.iconset || 'fab'), social.icon]}
            text={social.text} />
        )}
      </ul>
    </nav>
  </div>
}

export default Hero
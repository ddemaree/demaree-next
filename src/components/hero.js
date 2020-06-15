import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import c from 'classnames'

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
    <span className="ml-2 font-semibold">{text}</span>
  </>

  const linkClassName = `rounded py-2 px-2 inline-block bg-ink-extralow no-underline leading-none`

  return (
    <li className={c(['mr-3 last:mr-0 mb-1 text-sm', className])}>
      {linkTo && <Link title={altText} to={linkTo} className={linkClassName} children={linkChildren} />}
      {!linkTo && <a href={href} rel="me" title={altText} onClick={onClick} className={linkClassName} children={linkChildren} />}
    </li>
  )
}

SocialItem.defaultProps = {
  href: '#'
}

const Memoji = ({ className }) => {
  const { memoji } = useStaticQuery(graphql`
    query HeroQuery {
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
  
  return <figure className={className}>
    {memoji && <img alt="Cartoon portrait of David Demaree" src={memoji.img.fixed.src} className="max-w-full" />}
  </figure>
}

const Hero = ({ className }) => {
  return <div className="dd-hero">

    <div className={c(["flex flex-wrap", className])}>
      <div className="w-24 md:w-32 flex my-2 justify-center">
        <Memoji className="w-16 m-0" />
      </div>
      <div className="max-w-md my-2">
        <div className="text-xl leading-tight font-normal">
          <b>David Demaree</b> is a product manager, designer, and writer based in New Jersey.
        </div>
    <nav className="mt-3">
      <ul className={`list p-0 m-0 flex flex-wrap font-soehne`}>
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
    </div>

  </div>
}

export default Hero
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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

export default Memoji
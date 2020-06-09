import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import c from 'classnames'

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

  return <div className={c(["flex flex-wrap items-center", className])}>
    <figure className="w-16 mb-0 mr-4 col-span-3">
    {memoji && <img alt="Cartoon portrait of David Demaree" src={memoji.img.fixed.src} className="max-w-full" />}
    </figure>
    <div className="my-4 max-w-md text-2xl leading-tight font-normal col-span-9" dangerouslySetInnerHTML={{__html: shortBio.content}} />
  </div>
}

export default Hero
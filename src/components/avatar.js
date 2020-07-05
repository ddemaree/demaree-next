import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const AvatarImage = ({ className }) => {
  const { avatar } = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(relativePath: {regex: "/david-avatar-2020.jpg/"}) {
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
  
  return <img src={avatar.img.fixed.src} className={className} />
}

export default AvatarImage
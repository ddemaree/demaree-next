
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

function Socials() {
  const data = useStaticQuery(graphql`
    query GetSocials {
      socials: allSocialsJson {
        nodes {
          service
          handle
          url
        }
      }
    }
  `)

  return <ul className="flex items-center justify-center sm:justify-start text-2xl">
    {data.socials.nodes.map(social => {
      return <li className="mr-4 last:mr-0">
        <a href={social.url}>
          <i className={`fab fa-${social.slug || social.service.toLowerCase()}`}></i>
          <span className="sr-only">{social.service}</span>
        </a>
      </li>
    })}
  </ul>;
}

export default Socials
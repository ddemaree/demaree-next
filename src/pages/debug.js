import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const deployUrl = process.env.BASE_URL
  return <div>
    <p>Deploy URL: {deployUrl || "Not set"}</p>
    <p>Build URL from config: {data.site.siteMetadata.buildUrl || "Not set"}</p>
  </div>
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        buildUrl
      }
    }
  }
`
import React from 'react'

export default ({ data }) => {
  const deployUrl = process.env.DEPLOY_PRIME_URL
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
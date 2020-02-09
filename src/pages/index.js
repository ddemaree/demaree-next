import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"

const IndexPage = ({ data }) => {
  const { html } = data.ghostHomePage

  return (
    <Layout>
      <div>
        <PageContent content={html} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    ghostHomePage: ghostPage(slug: {eq: "home-page"}) {
      id
      title
      html
    }
  }
`
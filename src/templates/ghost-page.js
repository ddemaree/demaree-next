import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageHeader from "../components/page-header"

import { graphql } from "gatsby"

const GhostPageTemplate = ({ data }) => {
  const { html, title } = data.page

  return (
    <Layout>
      <div className="mx-auto my-8">
        <PageHeader
          title={title}
          />
        <PageContent className="font-serif" content={html} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    page: ghostPage(slug: {eq: $slug}) {
      title
      slug
      html
    }
  }
`

export default GhostPageTemplate
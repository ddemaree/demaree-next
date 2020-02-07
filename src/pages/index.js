import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent, { PageWrapper } from "../components/page-content"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="container mx-auto px-6 my-8">
        <div className="max-w-xl mx-auto box-content">
          <PageContent content={data.homePage.html} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    homePage: ghostPage(slug: {eq: "home-page"}) {
      id
      title
      html
      mobiledoc
    }
  }
`
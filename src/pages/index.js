import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageWrapper from "../components/page-wrapper"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <PageWrapper>
        <div className="max-w-xl mx-auto box-content">
          <PageContent content={data.homePage.content} />
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    homePage: wordpressPage(slug: {eq: "home-page"}) {
      id
      title
      content
    }
  }
`
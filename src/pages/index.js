import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <PageContent content={data.ghostHomePage.html} />
      </div>
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
    ghostHomePage: ghostPage(slug: {eq: "home-page"}) {
      id
      title
      html
    }
  }
`
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"
import PageHeader from "../components/page-header"

const StyleGuidePage = ({ data }) => {
  const { page } = data

  return (
    <Layout 
      pageTitle="Style Guide"
      hasFancyHeader={!!page.feature_image} 
      mainClassName={`ph4 relative`}>
      <PageHeader title={data.page.title} featureImage={data.page.feature_image} />
      <div className="pa5 relative z-4 dd-bg-background">
        <PageContent content={data.page.html} />
      </div>
    </Layout>
  )
}

export default StyleGuidePage

export const query = graphql`
  query {
    page: ghostPage(slug: {eq: "__style-guide"}) {
      id
      title
      feature_image
      html
      mobiledoc
    }
  }
`
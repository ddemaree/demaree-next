import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent, { PageWrapper } from "../components/page-content"
import PageHeader from "../components/page-header"

const StyleGuidePage = ({ data }) => {
  const { page } = data

  return (
    <Layout 
      pageTitle="Style Guide"
      hasFancyHeader={!!page.feature_image} 
      mainClassName={`dd-bg-fade`}>
      <PageHeader title={data.page.title} featureImage={data.page.feature_image} />
      <PageWrapper>
        <PageContent content={data.page.html} />
      </PageWrapper>
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
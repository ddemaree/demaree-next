import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.scss"

import Layout from "../components/layout"
import PageContent from "../components/page-content"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className={styles.gridWrap}>
        <PageContent content={data.homePage.html} />
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
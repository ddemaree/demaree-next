import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageContent from "../components/page-content"

const IndexPage = ({ data }) => {
  const { html } = data.ghostHomePage

  return (
    <Layout>
      <div class="relative dark-overlay home-header">

        <div className="absolute z-10 w-full inset-y-0 flex flex-col justify-center">
          <h1 className="font-display-serif text-6xl xs:text-5xl text-white text-center leading-none">Hi there.</h1>
        </div>

        <figure className="z-0 h-64 lg:h-verytall">
          <img className="h-full w-full object-cover object-center" src="//res.cloudinary.com/demaree/image/upload/v1581295512/L2090706-2.jpg" />
        </figure>
      </div>
      <div className="my-8 mx-auto text-lg">
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
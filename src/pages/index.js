import React from "react"

import Layout from '../components/new-layout'
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section className="mb-12 text-xl sm:text-2xl px-6 max-w-4xl">
        <div className="py-6 relative">
          <figure className="w-32 lg:w-40 mx-auto mb-6 md:ml-0 md:mr-4 md:absolute right-0">
            <img src={data.memoji.img.fixed.src} className="max-w-full" />
          </figure>

          <p className="text-4xl sm:text-5xl leading-none font-sans font-semibold max-w-content md:mr-48">Hi, I'm David. I love code, cameras, coffee, and cocktails. <span className="whitespace-no-wrap">(Also alliteration.)</span></p>
        </div>

        <p className="mb-8 max-w-content">I live in the NYC suburbs with <a href="https://instagram.com/jdweinmann">my wife</a>, our 5-year-old daughter, and <a href="https://instagram.com/johnny.cash.frenchie">a cute French bulldog</a>. I've been making web sites and web software for 25 years, most recently leading design and typography teams at big companies. I'm also a published author and speak at conferences worldwide.</p>

        <p><a className="uppercase no-underline font-sans text-base bg-blue-700 py-3 sm:rounded block text-center font-semibold w-full max-w-md hover:bg-blue-500" href="/about">More about me</a></p>
      </section>
    </Layout>
  )
}

export const query = graphql`
query HomepageImagesQuery {
  memoji: file(relativePath: {regex: "/memoji.png/"}) {
    img: childImageSharp {
      fixed(width: 200, pngQuality: 10, webpQuality: 10, base64Width: 10) {
        srcWebp
        src
        base64
        aspectRatio
        srcSet
        srcSetWebp
      }
    }
  }
}
`

export default IndexPage
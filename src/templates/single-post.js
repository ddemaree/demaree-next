import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import GatsbyImg from 'gatsby-image'
import Layout from '../components/Layout'
import _ from 'lodash'
import _c from 'classnames'
import { DateTime } from 'luxon'

function SinglePost({ data: { file, images } }) {
  const { mdxDoc, remarkDoc } = file
  const doc = mdxDoc || remarkDoc || {}
  const { frontmatter: { title, subtitle, excerpt, description, date, custom_css, font_sets } } = doc
  const subtitleText = subtitle || excerpt || description
  
  const pageImages = _.keyBy(images.nodes, 'basename')
  console.log(pageImages)

  function Figure({ wide, full, caption, children, className }) {
    const classNames = _c([
      (wide && 'dd-block-wide'),
      (full && 'dd-block-full'),
      'dd-block',
      className
    ])

    return <figure className={classNames}>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  }

  function PageImg({src, alt, title, wide, full, caption, children, className}) {
    let pageImage = pageImages[src]
    if(pageImage) {
      return <Figure className={["dd-block-img", className]} caption={(title || caption)} wide={wide} full={full}>
        {pageImage.data
          ? <GatsbyImg fluid={pageImage.data.fluid} alt={alt}  />
          : <img src={pageImage.publicURL} alt={alt} />}
        {children}
      </Figure>
    } else {
      return null
    }
  }

  const components = {
    Figure,
    PageImg,
    img: ({ src, alt, title }) => {
      // If a page image matches the name, return a PageImg component
      if(pageImages[src]) return <PageImg {...{src, alt, title}} />

      return <figure className="dd-block-img markdown-img">
        <img {...{src, alt, title}} />
        {title && <figcaption>{title}</figcaption>}
      </figure>
    },
    p: props => {
      // Don't wrap block elements in <p> tags, just pass them through
      if(React.isValidElement(props.children)) {
        return props.children
      }
      return <p className="dd-paragraph" {...props} />
    }
  }

  return <Layout>
    <Helmet>
      <title>{title}</title>
      {custom_css && <style type="text/css">{custom_css}</style>}
      {font_sets && font_sets.map(set => <link href={`https://cdn.demaree.net/fonts/${set}/index.css`} rel="stylesheet" type="text/css" />)}
    </Helmet>
    <MDXProvider components={components}>
      <header className="dd-blog-header grid dd-grid-cols py-12 px-8">
        <h1 data={{content: title}} className="dd-blog-title dd-col-full mb-3 deorphan text-inkBold">{title}</h1>
        {subtitleText && <h2 className="text-center dd-col-full text-inkMedium text-lg sm:text-xl leading-snug sm:leading-snug mb-4">{subtitleText}</h2>}
        <div class="post-meta text-base text-center dd-col-full text-inkMedium"><time dateTime={date}>{DateTime.fromISO(date).toFormat("DDD") }</time></div>
      </header>
      <main className="grid dd-grid-cols">
        {mdxDoc && <div className="dd-prose contents text-lg font-serif text-ink">
          <MDXRenderer>{mdxDoc.body}</MDXRenderer>
        </div>}
        {remarkDoc && <div className="dd-prose contents text-lg font-serif text-ink" dangerouslySetInnerHTML={{__html: remarkDoc.html}} />}
      </main>

    </MDXProvider>
  </Layout>
}

export default SinglePost

export const query = graphql`
query($filePath: String, $fileDirectory: String, $previousFilePath: String) {
  previousPost: file(relativePath: {eq: $previousFilePath}) {
    ...BlogPostFields
  }
  file(relativePath: {eq: $filePath}) {
    ...BlogPostFields
  }
  images: allFile(filter: {relativeDirectory: {eq: $fileDirectory}, internal: {mediaType: {glob: "image/*"}}}) {
    nodes {
      basename: base
      publicURL
      data: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`
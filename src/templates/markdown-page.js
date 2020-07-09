import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import AvatarImage from '../components/avatar'
import { graphql } from "gatsby"
import moment from 'moment'

const formattedDate = (date) => {
  const thisYear = moment().year()
  const dateMoment = moment(date)
  const dateIsNotThisYear = (thisYear !== dateMoment.year())
  return dateMoment.format(`MMM D${dateIsNotThisYear ? ", YYYY" : ""}`)
}

const MediumStyleHeader = ({title, dek, date, timeToRead}) =>
  <header className="max-w-lg pt-8 px-6 mx-auto pb-2">
    <h1 className="text-3xl md:text-4xl font-soehne font-semibold leading-none mt-2 mb-2" dangerouslySetInnerHTML={{__html: title}} />
    {dek && <p className="text-ink-medium font-soehne text-lg leading-snug">{dek}</p>}
    <MediumStyleMeta date={date} timeToRead={timeToRead} />
  </header>

const MediumStyleMeta = ({ date, timeToRead }) => {
  return <div className="flex items-center my-4 font-soehne text-sm mb-8">
    <div>
      <span className="bg-container rounded-full h-10 w-10 inline-block overflow-hidden">
        <AvatarImage className="block m-0" />
      </span>
    </div>
    <div className="ml-3 leading-tight">
      <div className="font-medium">David Demaree</div>
      <span className="text-xs text-ink-medium">
        {date && formattedDate(date)}
        {date && timeToRead && ` • `}
        {timeToRead && `${timeToRead} min read`}
      </span>
    </div>
  </div>
}
  

const BlogPostTemplate = ({ data: { post, site } }) => {
  const { html, excerpt, timeToRead, frontmatter } = post
  const { siteMetadata } = site
  const { title, dek, description, date, hideHeader, slug, featuredImage } = frontmatter

  const smartDescription = (description || dek || excerpt || `A blog post from ${formattedDate(date)} by David Demaree`)

  const image =
    featuredImage && featuredImage.img.fixed.src
    ? `${siteMetadata.buildUrl}${featuredImage.img.fixed.src}`
    : null


  return (
    <Layout pageTitle={title}>
      <Helmet
        meta={[
          {
            property: 'og:site_name',
            content: "David Demaree's web site"
          },
          {
            name: "twitter:site",
            content: "@ddemaree"
          },
          {
            name: "title",
            content: `${title} - David Demaree's blog`
          },
          {
            property: "og:title",
            content: title
          },
          {
            name: "twitter:title",
            content: title
          },
          {
            name: "description",
            content: excerpt
          },
          {
            property: "og:description",
            content: smartDescription
          },
          {
            name: "twitter:description",
            content: smartDescription
          },
          {
            name: "author",
            content: "David Demaree"
          },
          {
            property: "article:author",
            content: "https://demaree.me"
          },
          {
            name: "twitter:creator",
            content: "@ddemaree"
          },
          {
            property: "og:type",
            content: "article"
          },
          {
            property: "article:published_time",
            content: date
          },
          {
            name: "twitter:label1",
            value: "Reading time"
          },
          {
            name: "twitter:label2",
            value: `${timeToRead} min read` 
          }
        ].concat(
          image 
            ? [
              { name: "twitter:card", content: "summary_large_image" },
              { property: "og:image", content: image },
              { name: "twitter:image:src", content: image }
            ]
            : [
              { name: "twitter:card", content: "summary" }
            ]
        )}>
        <link rel="canonical" href={`${siteMetadata.buildUrl}${slug}`} />
      </Helmet>
      <article className="py-8 pb-16">
        {!hideHeader && <MediumStyleHeader {...{title, dek, timeToRead, date}} />}
        <PageContent content={html} />
        <hr />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        buildUrl
      }
    }
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        dek
        description
        hideHeader
        slug
        featuredImage {
          img:childImageSharp {
            fixed(width: 500) {
              src
            }
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
      html
      excerpt
      timeToRead
    }
  }
`

export default BlogPostTemplate
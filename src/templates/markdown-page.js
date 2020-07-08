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
  

const BlogPostTemplate = ({ data: { post } }) => {
  const { html, excerpt, timeToRead, frontmatter } = post
  const { title, dek, description, date, hideHeader, slug } = frontmatter

  const smartDescription = (description || dek || excerpt || `A blog post from ${formattedDate(date)} by David Demaree`)

  return (
    <Layout pageTitle={title}>
      <Helmet>
        {/* Site meta */}
        <meta property="og:site_name" content="David Demaree's web site" />
        <meta name="twitter:site" content="@ddemaree" />

        {/* Title meta */}
        <meta name="title" content={`${title} - David Demaree's blog`} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />

        {/* Description meta */}
        <meta name="description" content={excerpt} />
        <meta property="og:description" content={smartDescription} />
        <meta property="twitter:description" content={smartDescription} />

        {/* Author meta */}
        <meta name="author" content="David Demaree" />
        <link rel="author" href="https://demaree.me" />
        <meta property="article:author" content="https://demaree.me" />
        <meta name="twitter:creator" content="@ddemaree" />

        {/* Image meta */}
        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://miro.medium.com/max/1200/1*kmNiM3agTOB5WdjRyQo_1A.png" />
        <meta name="twitter:image:src" content="https://miro.medium.com/max/1200/1*kmNiM3agTOB5WdjRyQo_1A.png" /> */}

        {/* Article meta */}
        <link rel="canonical" href={`https://demaree.me/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={date} />
        <meta name="twitter:label1" value="Reading time" />
        <meta name="twitter:data1" value={`${timeToRead} min read`} />
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
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        date
        dek
        description
        hideHeader
        slug
      }
      html
      excerpt
      timeToRead
    }
  }
`

export default BlogPostTemplate
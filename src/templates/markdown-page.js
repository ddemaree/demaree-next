import React from "react"
import Layout from "../components/layout"
import PageContent from "../components/page-content"
import AvatarImage from '../components/avatar'
import { graphql } from "gatsby"
import moment from 'moment'

const formattedDate = (date) => {
  const thisYear = moment().year()
  const dateMoment = moment(date)
  const dateIsNotThisYear = (thisYear !== dateMoment.year())
  return dateMoment.format(`MMM d${dateIsNotThisYear ? ", YYYY" : ""}`)
}

const MediumStyleHeader = ({title, dek, date, timeToRead}) =>
  <header className="max-w-lg pt-8 px-6 mx-auto pb-2">
    <h1 className="text-3xl md:text-4xl font-display-serif leading-none mt-2 mb-2" dangerouslySetInnerHTML={{__html: title}} />
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
  const { html, timeToRead, frontmatter } = post
  const { title, dek, date, hideHeader } = frontmatter

  return (
    <Layout>
      <article className="py-8">
        {!hideHeader && <MediumStyleHeader {...{title, dek, timeToRead, date}} />}
        <PageContent content={html} />
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
        hideHeader
      }
      html
      timeToRead
    }
  }
`

export default BlogPostTemplate
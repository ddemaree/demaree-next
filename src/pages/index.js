import React from 'react'
import { graphql, Link } from 'gatsby'
import { DateTime } from 'luxon'
import cn from 'classnames'
import Layout from '../components/Layout'
import Socials from '../components/Socials'
import _ from 'lodash'

const PostFeaturedImage = ({ src, className }) => {
  console.log(src)
  const classNames = cn("object-cover object-center h-full w-full", className)

  if(typeof src === "string") {
    const url = new URL(src.replace(/^\/\//, "https://"))
    if(url.host === "images.unsplash.com") {
      url.search = "?w=400"
      return <img src={url.toString()} alt="Image for post" className={classNames} />
    } else if(url.host === "res.cloudinary.com") {
      return <img src={url.toString()} alt="Image for post" className={classNames} />
    } else {
      return <img src={url.toString()} alt="Image for post" className={classNames} />
    }
  } else if(typeof src === "object" && src.image) {
      const { image } = src

      return <img src={image.thumbnail.src} alt="Image for post" className={classNames} height={image.thumbnail.height} width={image.thumbnail.width} />
  }

  return null
}

const BlogPostCard = ({ children, title, href, description, date, featuredImage }) => {
  const dateTime = DateTime.fromISO(date).setZone("America/New_York")
  const formattedDate = dateTime.toFormat("MMM dd, yyyy")

  const isInternal = /^\/(?!\/)/.test(href)

  const LinkTag = ({ className, children }) => (isInternal 
    ? <Link to={href} className={className}>{children}</Link>
    : <a target="_blank" href={href} className={className}>{children}</a>)

  return <article className="flex items-start col-start-2 col-span-8 md:col-start-auto md:odd:col-start-2 md:col-span-4 md:px-8">
    <div className="flex-1 lg:col-start-2 lg:col-span-6">
      <LinkTag className="block">
        <h2 className="deorphan text-inkBold font-semibold text-lg sm:text-xl leading-tight sm:leading-tight">{title}</h2>
        {description && <div className="text-sm mt-2">{description}</div>}
        <div className="text-inkMedium text-sm mt-2">{formattedDate}</div>
      </LinkTag>
    </div>
    {featuredImage && <LinkTag className="w-20 xs:w-1/3 h-24 ml-6 overflow-hidden rounded-md lg:col-span-2">
        <PostFeaturedImage src={featuredImage} />
      </LinkTag>}
    {children}
  </article>
}

function HomePage({ data }) {
  const postEdges = data.blogPosts.edges.map(e => e.node)
  const substackEdges = data.substackPosts.edges.map(e => e.node)
  
  const blogPosts = postEdges.map(edge => {
    const frontmatter = (edge.remarkDoc || edge.mdxDoc || {}).frontmatter
    
    return [
      frontmatter.date,
      <BlogPostCard 
        key={edge.relativePath}
        title={frontmatter.title}
        description={frontmatter.description || frontmatter.excerpt}
        date={frontmatter.date}
        featuredImage={frontmatter.featured_image || frontmatter.featured_image_url}
        href={`/p/${frontmatter.slug}`}>
      </BlogPostCard>
    ]
  })

  const substackPosts = substackEdges.map(edge => {
    const { title, subtitle, date, url, featured_image_url } = edge

    return [
      date,
      <BlogPostCard
        key={url}
        title={title}
        description={subtitle}
        date={date}
        featuredImage={featured_image_url}
        href={url} />
    ]
  })

  const allPosts = _.take([...blogPosts, ...substackPosts].sort((a, b) => {
    const [timeA, timeB] = [a[0], b[0]].map(t => Date.parse(t).toFixed())
    return timeB - timeA
  }).map(i => i[1]), 16)

  return <Layout>
    <main className="dd-homepage md:mt-12 grid dd-grid-cols-2 gap-y-10 md:gap-y-16 grid-flow-row" style={{'--layout-wide-width': '1100px'}}>
      <header className="homepage-header leading-tight col-span-full flex flex-col sm:contents">
        <figure className="mt-10 sm:mt-0 overflow-hidden col-span-full bg-red-200 justify-self-center w-48 rounded-full sm:justify-self-stretch sm:rounded-none sm:w-auto sm:col-span-4">
          <picture className="contents">
            <source media="(min-width: 640px)" srcSet="//res.cloudinary.com/demaree/image/twitter_name/w_600,ar_1,c_fill/ddemaree.jpg 600w, //res.cloudinary.com/demaree/image/twitter_name/w_1200,ar_1,c_fill/ddemaree.jpg 1200w" />
            <img src="//res.cloudinary.com/demaree/image/twitter_name/w_600,c_fill/ddemaree.jpg" className="object-fill object-center w-full h-full" width="600" height="600" />
          </picture>
        </figure>
        <div className="text-center sm:text-left sm:py-12 self-center justify-self-center max-w-md md:max-w-lg sm:col-start-5 sm:col-span-7 sm:row-start-1 p-8 col-span-full">
          <p className="font-roslindale-2 text-2xl xs:text-3xl md:text-4xl" style={{'font-variation-settings': `'wdth' 96`, 'font-feature-settings': `'ss05' on`}}><b className="text-inkBold font-medium">Hi, I'm David Demaree</b>,<br className="none sm:block" /> a writer, web designer, photographer, &amp; tech product manager</p>
          <div class="mt-6 text-inkBold">
            <Socials />
          </div>
        </div>
      </header>

      <h2 className="text-center uppercase tracking-widest font-sans-display font-bold text-accent text-lg dd-col-wide">Latest writing</h2>

      {allPosts}
    </main>
  </Layout>
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    substackPosts: allSubstackPost(sort: { order: DESC, fields: date}, filter: { date: { gt: "2020-01-01" }}) {
      edges {
        node {
          title
          subtitle
          date
          featured_image_url
          url
        }
      }
    }
    blogPosts: allFile(sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}, filter: {name: {ne: "_index"}, relativePath: {glob: "blog/**/*.{md,mdx}"}}) {
      edges {
        node {
          relativePath
          remarkDoc: childMarkdownRemark {
            frontmatter {
              ...BlogPostFields
            }
          }
          mdxDoc: childMdx {
            frontmatter {
              ...BlogPostFields
            } 
          }
        }
      }
    }
  }
`
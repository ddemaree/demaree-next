import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { DateTime } from 'luxon'

const BlogPostWrapper = ({ children, title, href, description, date, featuredImage }) => {
  const dateTime = DateTime.fromISO(date).setZone("America/New_York")
  const formattedDate = dateTime.toFormat("MMM dd, yyyy")

  return <article className="flex items-start col-start-2 col-span-8 md:col-start-auto md:odd:col-start-2 md:col-span-4 md:px-8">
    <div className="flex-1 lg:col-start-2 lg:col-span-6">
      <a href={href} className="block">
        <h2 className="deorphan text-inkBold font-semibold text-lg sm:text-xl leading-tight sm:leading-tight">{title}</h2>
        {description && <div className="text-sm mt-2">{description}</div>}
        <div className="text-inkMedium text-sm mt-2">{formattedDate}</div>
      </a>
    </div>
    {featuredImage && <a href={href} className="w-20 xs:w-1/3 h-24 ml-6 overflow-hidden rounded-md lg:col-span-2">
      </a>}
    {children}
  </article>
}

function HomePage({ data }) {
  const postEdges = data.blogPosts.edges.map(e => e.node)
  
  const posts = postEdges.map(edge => {
    const frontmatter = (edge.remarkDoc || edge.mdxDoc || {}).frontmatter
    
    return <BlogPostWrapper 
      key={edge.relativePath}
      title={frontmatter.title}
      description={frontmatter.description || frontmatter.excerpt}
      date={frontmatter.date}
      href={`/p/${frontmatter.slug}`}>
    </BlogPostWrapper>
  })

  return <Layout>
    <main aria-role="main" className="dd-homepage md:mt-12 grid dd-grid-cols-2 gap-y-10 md:gap-y-16 grid-flow-row" style={{'--layout-wide-width': '1100px'}}>
      <header className="homepage-header leading-tight col-span-full flex flex-col sm:contents">
        <figure className="mt-10 sm:mt-0 overflow-hidden col-span-full bg-red-200 justify-self-center w-48 rounded-full sm:justify-self-stretch sm:rounded-none sm:w-auto sm:col-span-4">
          <picture className="contents">
            <source media="(min-width: 640px)" srcset="//res.cloudinary.com/demaree/image/twitter_name/w_600,ar_1,c_fill/ddemaree.jpg 600w, //res.cloudinary.com/demaree/image/twitter_name/w_1200,ar_1,c_fill/ddemaree.jpg 1200w" />
            <img src="//res.cloudinary.com/demaree/image/twitter_name/w_600,c_fill/ddemaree.jpg" className="object-fill object-center w-full h-full" width="600" height="600" />
          </picture>
        </figure>
        <div className="text-center sm:text-left sm:py-12 self-center justify-self-center max-w-md md:max-w-lg sm:col-start-5 sm:col-span-7 sm:row-start-1 p-8 col-span-full">
          <h1>This is a gatsby site</h1>
        </div>
      </header>

      <h2 className="text-center uppercase tracking-widest font-sans-display font-bold text-accent text-lg dd-col-wide">Latest writing</h2>

      {posts}
    </main>
  </Layout>
}

export default HomePage

export const query = graphql`
  query HomePageQuery {
    blogPosts: allFile(filter: {name: {ne: "_index"}, relativePath: {glob: "blog/**/*.{md,mdx}"}}) {
      edges {
        node {
          relativePath
          remarkDoc: childMarkdownRemark {
            frontmatter {
              title
              date
              description
              excerpt
              slug
            }
          }
          mdxDoc: childMdx {
            frontmatter {
              title
              date
              description
              slug
            } 
          }
        }
      }
    }
  }
`
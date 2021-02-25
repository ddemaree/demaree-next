import { graphql } from "gatsby";

export const BlogPostFragment = graphql`
  fragment BlogPostFields on File {
    name
    relativePath
    mdxDoc: childMdx {
      body
      frontmatter {
        ...BlogPostMetaFields
        custom_css
        font_sets
      }
    }
  }
`

export const FrontmatterFragment = graphql`
  fragment BlogPostMetaFields on Frontmatter {
    title
    date
    slug
    description
    excerpt
    subtitle
    featured_image_url
    featured_image {
      id
    }
  }
`
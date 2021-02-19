import { graphql } from "gatsby";

export const FrontmatterFragment = graphql`
  fragment BlogPostFields on Frontmatter {
    title
    date
    tags
    slug
    description
    excerpt
    subtitle
    featured_image_url
    featured_image {
      image: childImageSharp {
        original {
          height
          width
        }
        thumbnail: fluid(maxWidth: 300) {
          src
          height: presentationHeight
          width: presentationWidth
        }
      }
    }
  }
`
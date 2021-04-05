import Layout from '../components/Layout';
import PostContent from '../components/PostContent';
import apolloClient from '../lib/data/apollo-client'
import gql from 'graphql-tag'

function Page({ page: { title, content } }) {
  return <Layout>
    <div className="py-8">
      <h1 className="max-w-2xl mx-auto px-6 font-semibold pb-16 text-center text-4xl text-ink-bold">{title}</h1>
      <PostContent html={content} />
    </div>
  </Layout>
}

export default Page

export async function getStaticProps({ params: { pageSlug } }) {
  const { data: { page } } = await apolloClient.query({
    query: gql`
      query PageQuery($pageSlug: ID!) {
        page(id: $pageSlug, idType: URI) {
          title
          content
        }
      }
    `,
    variables: {
      pageSlug
    }
  })
  
  return {
    props: { page }
  }
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      query PagePathsQuery {
        pages {
          nodes {
            slug
            databaseId
          }
        }
      }
    `
  }) 

  const pageNodes = data.pages.nodes

  const paths = pageNodes.map(({ slug, databaseId }) => ({params: { pageSlug: slug, databaseId }}))

  return {
    paths,
    fallback: false
  }
}
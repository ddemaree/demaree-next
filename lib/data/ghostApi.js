import GhostAPI from '@tryghost/content-api'

export const api = new GhostAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
})

// Strip Ghost domain from urls
export const stripDomain = url => {
  return url.replace(process.env.GHOST_API_URL, "")
}

export async function getSinglePost(slug) {
  let post = await api.posts.read({ slug }, {formats: ['html', 'plaintext']})
  return post
}

export async function getPosts() {
  let posts = await api.posts
    .browse({
      include: "tags,authors",
      limit: "all",
    })
    .catch(err => {
      console.error(err)
    })

  posts.forEach(post => {
    post.original_url = stripDomain(post.url)
    post.url = `/p/${post.slug}`
    post.primary_author.url = stripDomain(post.primary_author.url)
    post.tags.map(tag => (tag.url = stripDomain(tag.url)))

    // Convert publish date into a Date object
    // post.published_at = new Date(post.published_at)
  })

  // Bring featured post to the top of the list
  posts.sort((post, nextPost) => nextPost.featured - post.featured)

  return posts
}
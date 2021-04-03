const fs = require('fs')
const { DateTime } = require('luxon')
const { minify } = require('html-minifier');
const { Feed } = require('feed');

const fetch = require('cross-fetch');
const { ApolloClient, HttpLink, InMemoryCache } = require('@apollo/client');
const gql = require('graphql-tag')

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "https://demaree.space/graphql", fetch }),
  cache: new InMemoryCache(),
})

const POSTS_QUERY = gql`
  query RssPostsQuery {
    postResults: posts(first: 10) {
      posts: nodes {
        title
        slug
        excerpt: unencodedExcerpt
        date: dateGmt
        content
      }
    }
  }
`

async function getPosts() {
  const { data } = await apolloClient.query({
    query: POSTS_QUERY
  })

  return data
}

const author = {
  name: "David Demaree",
  email: "demaree@hey.com",
  link: "https://demaree.me/"
}

const feed = new Feed({
  title: "David Demaree's blog",
  description: "You don't miss Google Reader, you miss the web before 2012 — @jomc",
  id: "https://demaree.me/",
  link: "https://demaree.me/",
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: "http://demaree.me/image.png",
  favicon: "http://demaree.me/favicon.ico",
  copyright: "All rights reserved 2021, David Demaree",
  updated: new Date(2013, 6, 14), // optional, default = today
  generator: "awesome", // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: "https://demaree.me/feeds/posts.json",
    atom: "https://demaree.me/feeds/posts.atom.xml"
  },
  author
});

async function main() {
  const { postResults: { posts } } = await getPosts()
  // console.log(posts)
  
  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://demaree.me/p/${post.slug}`,
      link: `https://demaree.me/p/${post.slug}`,
      description: post.excerpt,
      author,
      date: DateTime.fromISO(post.date).toJSDate(),
      content: minify(post.content, {
        collapseWhitespace: true,
        html5: true
      })
    })
  })
  
  // Just in case, check for/create the `out` dir
  if(!fs.existsSync('./out/feeds')) fs.mkdirSync('./out/feeds')
  fs.writeFileSync('./out/feeds/posts.rss.xml', feed.rss2())
  fs.writeFileSync('./out/feeds/posts.atom.xml', feed.atom1())
  fs.writeFileSync('./out/feeds/posts.json', feed.json1())
}

main();
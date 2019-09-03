require("dotenv").config();

const fs = require('fs')
const path = require('path')

// Init Ghost API
const GhostAPI = require("@tryghost/content-api");
const api = new GhostAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v2"
});

// Strip Ghost domain from urls
const stripGhostDomain = url => {
  return url.replace(process.env.GHOST_API_URL, "");
};

module.exports = config => {
  // config.addPassthroughCopy("assets");

  // Don't ignore the same files ignored in the git repo
  // config.setUseGitIgnore(false);
  
  config.addFilter("downcase", function(value) { 
    return String(value).toLowerCase()
  });

  config.addFilter("unorphan", value => {
    const words = value.split(' ')
    if(words.length <= 2) return value;

    let firstSet = words.slice(0, words.length - 2)
    let endWords = words.slice(words.length - 2).join('&nbsp;')
    firstSet.push(endWords)
    
    return firstSet.join(' ')
  })

  config.addFilter("classnames", value => require('classnames')(value) )

  const manifestPath = path.join(__dirname, 'dist/assets/manifest.json')
  const manifestPresent = fs.existsSync(manifestPath)
  let manifest = {}
  
  if(manifestPresent) {
    const manifestData = fs.readFileSync(manifestPath)
    manifest = JSON.parse(manifestData)
  }

  config.addShortcode("asset", function(assetName) {
    if(process.env.NODE_ENV === 'production' && manifest[assetName]) {
      return manifest[assetName];
    } else {
      return "/assets/" + assetName;
    }
  });

  // Get all pages, called 'docs' to prevent
  // conflicting the eleventy page object
  config.addCollection("docs", async function(collection) {
    collection = await api.pages
      .browse({
        include: "authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    collection.map(doc => {
      doc.ghostURL = doc.url
      doc.url = stripGhostDomain(doc.url);
      doc.primary_author.url = stripGhostDomain(doc.primary_author.url);

      // Convert publish date into a Date object
      doc.published_at = new Date(doc.published_at);
      return doc;
    });

    return collection;
  });

  // Get all posts
  config.addCollection("posts", async function(collection) {
    collection = await api.posts
      .browse({
        include: "tags,authors",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });

    collection.map(post => {
      post.ghostURL = post.url
      post.url = stripGhostDomain(post.url);
      post.permalink = ('/posts/' + post.slug + '/')
      post.primary_author.url = stripGhostDomain(post.primary_author.url);
      post.tags.map(tag => (tag.url = stripGhostDomain(tag.url)));

      // Convert publish date into a Date object
      post.published_at = new Date(post.published_at);
      return post;
    });

    // Bring featured post to the top of the list
    collection.sort((post, nextPost) => nextPost.featured - post.featured);

    return collection;
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    passthroughFileCopy: true,
    
    // Files read by Eleventy, add as needed
    templateFormats: ["css", "njk", "md", "txt", "liquid"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
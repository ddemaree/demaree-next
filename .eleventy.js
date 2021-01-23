require("dotenv").config()
const htmlmin = require("html-minifier")

const path = require('path')
const fs = require('fs')
const { get } = require("https")
const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.addPassthroughCopy({"static/fonts": "fonts" })

  eleventyConfig.addWatchTarget("./src/_assets/");

  eleventyConfig.addCollection("homePagePosts", async function(collections) {
    let homePosts = []
    const getSubstacks = require('./src/_data/substackPosts')
    const substacks = await getSubstacks()
    substacks.forEach(post => {
      homePosts.push({
        type: 'substack',
        title: post.title,
        description: post.subtitle,
        date: DateTime.fromISO(post.post_date),
        url: post.canonical_url,
        featured_image: post.cover_image
      })
    })

    // Get local posts
    const posts = collections.getFilteredByTag("posts")
    posts.forEach(({url, data, date}) => {
      homePosts.push({
        type: 'post',
        title: data.title,
        description: (data.description ||  data.excerpt || null),
        date,
        url,
        featured_image: data.featured_image
      })
    })

    homePosts = homePosts.sort((a, b) => {
      return b.date - a.date
    })

    return homePosts
  })

  eleventyConfig.addFilter("classnames", value => require('classnames')(value) )

  const manifestPath = path.join(__dirname, '_site/assets/manifest.json')
  const manifestPresent = fs.existsSync(manifestPath)
  let manifest = {}
  
  if(manifestPresent) {
    const manifestData = fs.readFileSync(manifestPath)
    manifest = JSON.parse(manifestData)
  }

  eleventyConfig.addShortcode("asset", function(assetName) {
    if(process.env.NODE_ENV === 'production' && manifest[assetName]) {
      return manifest[assetName];
    } else {
      return "/assets/" + assetName;
    }
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      if (
        process.env.ELEVENTY_PRODUCTION &&
        outputPath &&
        outputPath.endsWith(".html")
      ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        })
        return minified
      }

      return content
    })

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  }
}
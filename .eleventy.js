const htmlmin = require("html-minifier");
const { DateTime } = require('luxon');
const getReadingTime = require('./src/lib/reading-time')
const axios = require('axios')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/fa");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addCollection('postItems', collection => {
    const postItems = collection.getFilteredByGlob('src/_posts/**/*.md')
    return postItems;
  });

  /*
  Creates a new merged posts collection with dates set appropriately
  for WordPress posts, sorted in the right order. This allows
  `tags: posts` to work in static posts to add stuff to the blog
  */
  eleventyConfig.addCollection('smartPosts', coll => {
    const allPosts = coll.getFilteredByTag('posts')

    const datedPosts = allPosts.map(p => {
      p.date = (p.data.post && p.data.post['date']) || p.date;

      // If string, this came from WordPress and needs to be typecast
      if(typeof p.date === 'string') {
        p.date = DateTime.fromISO(p.date).toJSDate()
      }

      return p
    }).sort((a, b) => (a.date - b.date))
    
    return datedPosts
  })

  eleventyConfig.addFilter('formattedDate', value => {
    let dt;

    if(typeof value === 'string') {
      dt = DateTime.fromISO(value)
    } else {
      dt = DateTime.fromISO(value.toISOString())
    }
    
    dt.setZone('America/New_York');
    return dt.toLocaleString(DateTime.DATE_MED)
  })

  // Add Cloudinary transformations if a value is a Cloudinary URL
  // If there are already transformations in place, leave them
  // TODO: Append or override existing transforms, if any
  eleventyConfig.addNunjucksFilter("transformAsset", function(url, transforms) {
    if(!url.match(/res\.cloudinary\.com/)) return url
    return url.replace('/image/upload/v', `/image/upload/${transforms}/v`)
  });

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // Experimental shortcode to do embeds; it doesn't work :(
  eleventyConfig.addNunjucksAsyncShortcode("embedSocial", async url => {
    const urlObj = new URL(url)
    const domain = urlObj.host;
    let oembedData;

    switch (domain) {
      case 'twitter.com':
        oembedData = await axios.get('https://publish.twitter.com/oembed', {params: { url, dnt: true, align: 'center' }})
          .then(response => ({ ...response.data, response }))
          .catch((err, response) => ({
            html: `<div class="bg-red-100 font-bold">Error getting tweet ${err}</div>`,
            response,
            err
          }));
        
        return `<figure class="embed embed--twitter">${oembedData.html}</figure>`;
      case 'instagram.com':
        console.log('Embed is Instagram', url)
        oembedData = await axios.get('https://api.instagram.com/oembed', {params: { url }}).then(response => response.data).catch(err => {html: "NOPE"})
        return `<figure class="embed embed--instagram">${oembedData.html}</figure>`;
      default:
        console.log("Embed is neither Twitter nor Insta")
        return "EMBED SOCIAL HERE";
        break;
    }
  })

  eleventyConfig.addFilter('readingTime', value => {
    return getReadingTime(value);
  })

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  let markdownIt = require('markdown-it');
	let markdownItAttrs = require('markdown-it-attrs');
	let markdownItContainer = require('markdown-it-container');
	let options = {
		html: true,
	};
	let markdownLib = markdownIt(options)
		.use(markdownItAttrs)
		.use(markdownItContainer);
	eleventyConfig.setLibrary('md', markdownLib);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  }
};
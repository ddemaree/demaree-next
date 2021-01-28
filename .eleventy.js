require("dotenv").config()

const fs = require('fs')
const path = require('path')
const htmlmin = require("html-minifier")
const { DateTime } = require("luxon")
const { compact } = require("lodash")
const classnames = require('classnames')
const cloudinary = require('cloudinary')
const _ = require('lodash')
const axios = require('axios')

const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const getImageTag = require('./src/_includes/js/imageTag')
const getSubstacks = require('./src/_includes/js/getSubstacks')
const imageTag = require("./src/_includes/js/imageTag")
const getDimensions = require('./src/_includes/js/dimensions')

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.addWatchTarget("./src/_assets/");
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection("homePagePosts", async function(collections) {
    let homePosts = []
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

    return homePosts.slice(0, 16)
  })

  eleventyConfig.addFilter("formatDate", value => {
    let dt
    
    if(value.setZone !== undefined) {
      dt = value
    } else if (typeof value === "string") {
      dt = DateTime.fromISO(value)
    } else {
      dt = DateTime.fromISO(value.toISOString())
    }

    dt.setZone("America/New_York")
    return dt.toLocaleString(DateTime.DATE_MED)
  })

  eleventyConfig.addFilter("classnames", value => classnames(value) )

  const manifestPath = path.join(__dirname, '_site/assets/manifest.json')
  const manifestPresent = fs.existsSync(manifestPath)
  let manifest = {}
  
  if(manifestPresent) {
    const manifestData = fs.readFileSync(manifestPath)
    manifest = JSON.parse(manifestData)
  }

  eleventyConfig.addShortcode("cy_image", async function(assetName, opts) {
    const resource = await cloudinary.v2.api.resource(assetName)
    const { height, width } = resource
    const aspectRatio = width / height

    opts = _.defaults(opts, {
      maxWidth: 2000,
      style: 'normal'
    })

    const maxSizes = {'normal': 700, 'wide': 1080, 'full': 2048}
    const allSizes = [276,552,640,728,816,904,992,1080,1350,1620,1890,2048]
    const maxSize = maxSizes[opts.style]
    const imageSizes = allSizes.filter(s => (s <= maxSize))

    const srcsetUrls = imageSizes.map(s => {
      const url = cloudinary.url(assetName, {format: 'jpg', width: (s * 2)})
      return `${url} ${s}w`
    })

    const baseUrl = cloudinary.url(assetName, {format: 'jpg', width: (maxSize * 2)})

    const previewUrl = cloudinary.url(assetName, {format: 'jpg', width: (maxSize / 2), effect: "blur:20"})

    const imgAttrs = {
      src: previewUrl,
      ['data-src']: baseUrl,
      ['data-srcset']: srcsetUrls.join(', '),
      alt: opts.alt,
      class: classnames('cloudinary-image w-full', opts.class),
      width,
      height
    }

    const attrString = _.reduce(imgAttrs, (attrList, value, key) => {
      console.log(key, value)
      if(value) attrList.push(`${key}="${value}"`)
      return attrList
    }, []).join(" ")
    
    // return `<img class="lazy-img-preview" ${attrString} />`;
    // return cloudinary.image(assetName, {dpr: "auto", responsive: true, width: "auto", crop: "scale", responsive_placeholder: "blank"})
    return `<figure class="lazy-img-container relative" style="--aspect-ratio: ${aspectRatio};"><img class="lazy-img-preview" ${attrString} /></figure>`
  })

  eleventyConfig.addShortcode("twitter", async function(tweetId) {
    const tweetOembed = await axios.get("https://api.twitter.com/1/statuses/oembed.json", { params: { id: tweetId, dnt: true }}).then(r => r.data)

    const { html } = tweetOembed

    return `<figure class="dd-embed dd-embed-tweet">${html}</figure>`
  })

  eleventyConfig.addShortcode("insta", async function(id) {
    const access_token = "168636849931146|be6d5aa05878fe740bc69fd9cb159c12"
    const url = `https://instagram.com/p/${id}`
    const instaEmbed = await axios.get("https://graph.facebook.com/v9.0/instagram_oembed/", {params: { url, access_token }}).then(r => r.data)

    const { thumbnail_url } = instaEmbed

    return `<blockquote class="instagram-media w-full" data-instgrm-captioned data-instgrm-permalink="${url}" data-instgrm-version="13"><noscript><img src="${thumbnail_url}" /></noscript></blockquote>
    <script async src="//platform.instagram.com/en_US/embeds.js"></script>`;
  })

  eleventyConfig.addShortcode("cy_font", assetPath => {
    const assetURL = `https://res.cloudinary.com/demaree/raw/upload/s3/fonts/${assetPath}/index.css`

    return `<link rel="stylesheet" href="${assetURL}" type="text/css" />`;
  })

  eleventyConfig.addShortcode("asset", function(assetName) {
    if(process.env.NODE_ENV === 'production' && manifest[assetName]) {
      return manifest[assetName];
    } else {
      return "/assets/" + assetName;
    }
  });

  eleventyConfig.addNunjucksShortcode("image_tag", function(args) {
    return getImageTag(args)
  })

  eleventyConfig.addShortcode("image", (src, dimensions, opts) => {
    opts = opts || {}
    dimensions = dimensions || ""

    if(typeof dimensions === "string") {
      dimensions = dimensions.split("x")
    }


  })

  // Get the first `n` elements of a collection.
  // Credit: github.com/tatianamac/tm11ty
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addPairedShortcode("gallery", function(content) {
    return `<ul class="bg-red-500">${content}</ul>`
  })

  eleventyConfig.addShortcode("gallery_img", function(src, dimensions) {
    const { aspectRatio } = getDimensions(dimensions)
    const tag = imageTag({src, dimensions})
    return `<li class="gallery-item" style="--gallery-flex: ${aspectRatio}"><figure>${tag}</figure></li>`;
  })

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      if (
        process.env.ELEVENTY_PRODUCTION &&
        outputPah &&
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

  let markdownLib = require("markdown-it")({
      html: true,
    })
    .use(require("markdown-it-attrs"))

  eleventyConfig.setLibrary("md", markdownLib)

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    // markdownTemplateEngine: "njk"
  }
}
require("dotenv").config()

const fs = require('fs')
const path = require('path')
const htmlmin = require("html-minifier")
const { DateTime } = require("luxon")
const { URL } = require('url')
const { compact, includes } = require("lodash")
const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

function makeCloudinaryURL(src, targetWidth, targetHeight, otherTransforms) {
  let cyMethod = 'upload'
  let cyPath = src

  let cyParams = compact([
    'c_fill',
    (targetWidth && `w_${targetWidth}`),
    (targetHeight && `h_${targetHeight}`),
    otherTransforms
  ]).join(',')

  if (src.match(/^https?\:/) || src.match(/^\/\//)) {
    cyMethod = 'fetch'

    // Handle edge case where very large Unsplash images may be larger than CY's maximum upload size
    if(src.match(/images\.unsplash/) && !src.match(/w\=/)) {
      src = src + '?w=2000'
    }
    
    cyPath = encodeURIComponent(src)
  }

  return `//res.cloudinary.com/demaree/image/${cyMethod}${cyParams && `/${cyParams}`}/${cyPath}` 
}

function makePreviewImageUrl(origSrc, width, height) {
  if(origSrc.match(/images\.unsplash/)) {
    return `${origSrc}?w=${width / 10}&h=${height / 10}&blur=10`
  } else {
    return makeCloudinaryURL(origSrc, (width / 10), (height / 10), 'e_blur:200')
  }
}

function makeImageURL(origSrc, targetWidth, targetHeight, otherTransforms) {
  let src = origSrc.slice()
  let url = null;

  try {
    url = new URL(src)
  } catch(err) {
    // URL parsing failed so it's probably a local URL
  }

  if(src.match(/images\.unsplash\.com/)) {
    // Use Unsplash's image API, let them pay for bandwidth

    let usQuery = compact([
      (targetWidth && `w=${targetWidth}`),
      (targetHeight && `h=${targetHeight}`)
    ]).join('&')

    return src.replace(/[hw]=\d+/,"") + '?' + usQuery
  } else if(src.match(/source\.unsplash\.com/)) {
    return src.replace(/\/$/) + '/' + [targetWidth, targetHeight].join('x')
  } else if(url && includes(['placehold.it', 'cdn.substack.com'], url.host)) {
    
  } else {
    return makeCloudinaryURL(src, targetWidth, targetHeight, otherTransforms)
  } 

  return src
}

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addWatchTarget("./src/_assets/");

  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(syntaxHighlight);

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

  eleventyConfig.addFilter("classnames", value => require('classnames')(value) )

  const manifestPath = path.join(__dirname, '_site/assets/manifest.json')
  const manifestPresent = fs.existsSync(manifestPath)
  let manifest = {}
  
  if(manifestPresent) {
    const manifestData = fs.readFileSync(manifestPath)
    manifest = JSON.parse(manifestData)
  }

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
    const sizes = [300, 600, 900, 1200, 1600, 2000]
    let { src, dimensions } = args
    let baseSrc, srcset;

    dimensions = dimensions || "x"
    const [width, height] = dimensions.split("x").map(n => (n ? parseInt(n): null))
    const aspectRatio = (width/height)

    baseSrc = makeImageURL(src, width, height)
    srcset = compact(sizes.map(size => {
      if(size > (width * 1.5)) {
        return null
      }
      
      const sizeHeight = size / aspectRatio
      const sizedUrl = makeImageURL(src, size, sizeHeight)
      return `${sizedUrl} ${size}w`
    })).join(', ')

    const previewSrc = makePreviewImageUrl(src, width, height)
    
    const classAttr = args.class ? `class="${args.class}" ` : ""
    return `<img data-orig-src="${src}" src="${previewSrc}" data-src="${baseSrc}" data-srcset="${srcset}" ${classAttr}/>`
  })

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
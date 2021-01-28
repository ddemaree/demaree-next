const { URL } = require('url')
const { compact, includes } = require("lodash")

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

module.exports = {
  makeImageURL,
  makeCloudinaryURL,
  makePreviewImageUrl
}
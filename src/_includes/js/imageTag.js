const { compact } = require('lodash')
const { makeImageURL, makePreviewImageUrl } = require('./makeImageURL')
const getDimensions = require('./dimensions')

module.exports = function(args) {
  const sizes = [300, 600, 900, 1200, 1600, 2000]
  let { src, dimensions } = args
  let baseSrc, srcset;

  const { width, height, aspectRatio } = getDimensions(dimensions)

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
}
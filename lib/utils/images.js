import { defaults } from "lodash";

const _setOptionDefaults = options => {
  // Support width as only options arg
  if(typeof options === "number") options = {width: options}
  else if(options.__alreadyDefaults !== undefined) {
    // Prevent double-defaulting in cases where the functions call each other
    return options
  }

  return defaults({}, options, {
    width: null,
    quality: null,
    __alreadyDefaults: true
  })
}

export function fixImageUrl(src, options) {
  options = _setOptionDefaults(options)
  const urlObj = new URL(src)
  
  if(urlObj.host.match('unsplash.com')) {
    return fixUnsplashUrl(src, options)
  } else {
    return src
  }
}

export function fixUnsplashUrl(src, options) {
  options = _setOptionDefaults(options)

  const urlObj = new URL(src)
  const { host, search, pathname } = urlObj
  let fixedSearch = search;

  // let baseQuery = urlObj.search.replace(/w=\d+/, '')
  if(options.width) {
    let widthParam = `w=${options.width}`

    if(search.match(/w=\d+/)) {
      fixedSearch = search.replace(/w=\d+/, widthParam)
    } else {
      fixedSearch = search.replace(/^\?/, `?${widthParam}&`)
    }
  }

  let fixedUrl = "//" + host + pathname + fixedSearch

  return fixedUrl;
}
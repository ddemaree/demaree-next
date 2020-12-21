const cloudinaryPrefix = '/demaree/image/upload'

function OptimizedImage({src, alt, height, width, desiredWidth, className}) {
  let fixedUrl = src;

  if(desiredWidth && src.match(/^http/)) {
    const url = new URL(src)

    if(url.host === 'images.unsplash.com') {
      let baseQuery = url.search.replace(/w=\d+/, '')
      let query = baseQuery + `&w=${desiredWidth}`
      fixedUrl = "//" + url.host + url.pathname + query
    }
    else if(src.match('cloudinary.com/demaree/image/upload')) {
      // Already on my cloud, just need to fix the width
      let basePath = url.pathname.replace(/[hw]_\d+/,'')
      
    }
  }

  return <img
    src={fixedUrl}
    alt={alt}
    height={height}
    width={width}
    className={className} />
}

export default OptimizedImage


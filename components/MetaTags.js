export function TitleMetaTags({title, description}) {
  const baseTitle = "David Demaree's site"
  const pageTitle = title ? `${title} • ${baseTitle}` : baseTitle
  console.log(pageTitle)

  return <>
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle} />
    
    {title && <>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} /> 
    </>}

    {description && <>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </>}
  </>
}

export function DefaultMetaTags() {
  return <>
    <meta property="og:site_name" content="David Demaree's web site" />
    <meta name="twitter:site" content="@ddemaree" />
    <meta name="twitter:creator" content="@ddemaree" />
    <meta name="author" content="David Demaree" />
    <meta property="article:author" content="https://demaree.me" />
    <meta name="twitter:card" value="summary" />
  </>
}

export function ImageMetaTags({featuredImageUrl}) {
  return <>
    <meta name="twitter:card" value="summary_large_image" />
    <meta property="og:image" value={featuredImageUrl} />
    <meta name="twitter:image:src" value={featuredImageUrl} />
  </>
}

export function ArticleMetaTags({ readingTime, pubDate, featuredImageUrl }) {
  return <>
    <meta property="og:type" value="article" />

    {pubDate && <meta property="article:published_time" value={pubDate} />}
    {readingTime && <>
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:label2" value={`${readingTime} min read`} />
    </>}
    
  </>
}
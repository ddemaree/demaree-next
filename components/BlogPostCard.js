import c from 'classnames'
import Link from 'next/link'
import { formatDate } from '../lib/utils/date'
import OptimizedImage from './Image'

function BlogPostCard({ title, link, pubDate, readingTime, excerpt, className, featuredImage }) {
  const linkIsRemote = link.match(/^https?/)

  const cardTitleContent = <>
    <h2 className="text-2xl font-sans font-medium mb-1 text-inkBold" dangerouslySetInnerHTML={{__html: title}} />
    {excerpt && <h3 className="font-sans text-inkMedium">{excerpt}</h3>}
  </>

  const cardImageContent = <>
    {featuredImage && <figure className="w-36">
      <OptimizedImage desiredWidth={400} src={featuredImage} className="w-full block" />
    </figure>}
  </>

  return <article className={c(className, 'flex items-center')}>
    <div className="mr-8 flex-1">
      {linkIsRemote
        ? <a href={link}>{cardTitleContent}</a>
        : <Link href={link}><a>{cardTitleContent}</a></Link>}
      <div className="font-sans text-sm text-inkMedium mt-1">
        <span>{formatDate(pubDate)}</span>
        {readingTime && <>
          <span className="mx-2">•</span>
          <span>{readingTime} min read</span>
        </>}
      </div>
    </div>
    
    {featuredImage && (
      linkIsRemote
        ? <a className="block flex" href={link}>{cardImageContent}</a>
        : <Link href={link}><a className="block flex">{cardImageContent}</a></Link>
    )}
  </article>
}

export default BlogPostCard
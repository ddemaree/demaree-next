import c from 'classnames'
import { formatDate } from '../lib/utils/date'

function PostMeta({ date, readingTime, className }) {
  return <div className={c(className, 'flex')}>
    {date && <time dateTime={date}>{formatDate(date)}</time>}
    {(date && readingTime) && <span className="mx-2">•</span>}
    {readingTime && <span className="reading-time">{readingTime} min read</span>}
  </div>
}

export default PostMeta
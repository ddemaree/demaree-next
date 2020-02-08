import React from "react"
import { DateTime } from 'luxon'

const getDisplayDate = date =>
  DateTime.fromISO(date).toFormat('MMMM dd, yyyy')

const getReadingTimeInMinutes = (words) =>
  Math.ceil(words / 200.0)

export const ReadingTime = ({ words, className }) => (
  <span className={className}>{getReadingTimeInMinutes(words)} min read</span>
)

export const DisplayDate = ({ date }) =>
  <time>{ getDisplayDate(date) }</time>

const PostInfo = ({ date, words }) => {
  return <>
    {date && <DisplayDate date={date} />}
    {(date && words) && <span className="mx-2">•</span>}
    {words && <span>{getReadingTimeInMinutes(words)} min read</span>}
  </>
}

export default PostInfo
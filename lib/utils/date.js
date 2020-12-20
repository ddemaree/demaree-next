import { DateTime } from 'luxon'

export const makeDateObject = (dateISOString) =>
  DateTime.fromISO(dateISOString).setZone('America/New_York');

export function formatDate(dateISOString) {
  const postDate = makeDateObject(dateISOString)

  const today = DateTime.local()
  const aYearAgo = today.minus({months: 11, days: today.day})
  let formatString;

  if(postDate < aYearAgo) {
    formatString = "MMM d, yyyy"   
  } else {
    formatString = "MMM d"
  }

  return postDate.toFormat(formatString)
}
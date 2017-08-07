export function formatDate (dateString) {
  const utcString = new Date(dateString).toUTCString()
  const splitDate = utcString.split(' ')
  const dateArr = splitDate.slice(1, 4)

  return dateArr.join(' ')
}

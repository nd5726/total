export function formatTime (time) {
  function padTo2Digits (num) {
    return num.toString().padStart(2, '0')
  }
  function formatDate (date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate())
      ].join('-')
    )
  }
  return formatDate(new Date(time * 1000))
}
export function formatTimetoTimestamp (time) {
  return Math.floor(new Date(time) / 1000)
}

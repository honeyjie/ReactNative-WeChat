export const formateDate = (sendTime, lastSendTime) => {
  const time = new Date(sendTime)
  const gapTime = sendTime- lastSendTime
  const Month = time.getMonth() + 1
  const Day = time.getDate()
  const Hours = time.getHours()
  const Minutes = time.getMinutes()

  if (gapTime <= 60 * 1000) {
    return null
  } else if (gapTime > 60 * 1000 && gapTime <= 24 * 60 * 60 * 1000) {
    return Hours + ':' + Minutes
  } else if (gapTime > 24 * 60 * 60 * 1000) {
    return Month + '月' + Day + '日  ' + Hours + ':' + Minutes
  }
}

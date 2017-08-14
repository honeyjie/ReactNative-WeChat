export const formateDate = (sendTime, lastSendTime) => {
  const now = new Date(sendTime)

  const gapTime = sendTime - lastSendTime
  console.log(sendTime, lastSendTime, gapTime)

  const Month = now.getMonth() + 1
  const Day = now.getDate()
  const Hours = now.getHours()
  const Minutes = now.getMinutes()

  if (gapTime <= 60 * 1000) {
    return null
  } else if (gapTime > 60 * 1000 && gapTime <= 24 * 60 * 60 * 1000) {
    return Hours + ':' + Minutes
  } else if (gapTime > 24 * 60 * 60 * 1000) {
    return Month + '月' + Day + '日  ' + Hours + ':' + Minutes
  }
}

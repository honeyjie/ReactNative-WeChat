export const formateDate = (sendTime, lastSendTime) => {
  const time = new Date(sendTime)
  const gapTime = sendTime - lastSendTime
  const Month = time.getMonth() + 1
  const Day = time.getDate()
  const Hours = ('0' + time.getHours()).slice(-2)
  const Minutes = ('0' + time.getMinutes()).slice(-2)

  if (gapTime <= 60 * 1000) {
    return null
  } else if (gapTime > 60 * 1000 && gapTime <= 24 * 60 * 60 * 1000) {
    return Hours + ':' + Minutes
  } else if (gapTime > 24 * 60 * 60 * 1000) {
    return Month + '月' + Day + '日  ' + Hours + ':' + Minutes
  }
}

export const RecentTime = sendTime => {
  const now = Date.now()
  const date = new Date(sendTime)
  const gap = now - sendTime

  const hourTag = 24 * 60 * 60 * 1000
  const weekTag = hourTag * 7

  const Day = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  if (gap < hourTag) {
    return (
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2)
    )
  } else if (gap >= hourTag && gap < 2 * hourTag) {
    return 'YesterDay'
  } else if (gap >= 2 * hourTag && gap < weekTag) {
    return Day[date.getDay() - 1]
  } else {
    return (
      date.getFullYear() +
      '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      date.getDate()
    )
  }
}

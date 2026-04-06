const dateMap: Record<number, string> = {
  5: '2026-05-16',
  6: '2026-06-20',
  7: '2026-07-11',
  9: '2026-09-12',
  10: '2026-10-17',
  11: '2026-11-21',
  12: '2026-12-12',
}

function getTitle(month: number): string {
  return `[쉼On 육아Off] ${month}월 프로그램`
}

function getISODatePair(month: number): { start: string; end: string } {
  const date = dateMap[month]
  // 오후 2시 ~ 4시 KST (UTC+9) → UTC 05:00 ~ 07:00
  return {
    start: date.replace(/-/g, '') + 'T050000Z',
    end: date.replace(/-/g, '') + 'T070000Z',
  }
}

export function getGoogleCalendarUrl(month: number, description: string): string {
  const { start, end } = getISODatePair(month)
  const title = getTitle(month)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    details: description,
    location: '3040교화',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function downloadICS(month: number, description: string): void {
  const { start, end } = getISODatePair(month)
  const title = getTitle(month)
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ON&OFF//Program//KO',
    'BEGIN:VEVENT',
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `DTSTAMP:${now}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    'LOCATION:3040교화',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `쉼on육아off_${month}월.ics`
  a.click()
  URL.revokeObjectURL(url)
}

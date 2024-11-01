export function formatRelativeDate(inputDate: Date): string {
  const now = new Date()
  const diffTime = now.getTime() - inputDate.getTime()

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffMonths = now.getMonth() - inputDate.getMonth() + (now.getFullYear() - inputDate.getFullYear()) * 12
  const diffYears = now.getFullYear() - inputDate.getFullYear()

  if (diffYears > 0)
    return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`
  if (diffMonths > 0)
    return diffMonths === 1 ? '1 month ago' : `${diffMonths} months ago`
  if (diffDays > 0)
    return diffDays === 1 ? 'Yesterday' : `${diffDays} days ago`

  return 'Today'
}

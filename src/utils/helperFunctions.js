export const trimURL = (url) => {
  const trim = url?.toLowerCase()?.replaceAll(" ", "-")?.replaceAll("?", "")
  return trim
}

export const truncateText = (str, n) =>
  str?.length > n ? `${str?.trim()?.substring(0, n)}...` : `${str?.trim()}`

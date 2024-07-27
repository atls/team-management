export const formatMilliseconds = (milliseconds) => {
  const date = new Date(milliseconds)

  const checkTwoSymbols = (symbol: number) => {
    if (symbol <= 9) return `0${symbol}`
    return symbol
  }

  const hours = checkTwoSymbols(date.getHours())
  const minutes = checkTwoSymbols(date.getMinutes())
  const seconds = checkTwoSymbols(date.getSeconds())

  return `${hours}:${minutes}:${seconds}`
}

export const getCookieClient = (document) => {
  let resultCookitObj = {}
  const cookieString = document.cookie
  const cookieRecordArray = cookieString.split(';')
  for (const cookieRecord of cookieRecordArray) {
    const [cookieName, cookieValue] = cookieRecord.split('=')
    resultCookitObj[cookieName] = cookieValue
  }
  return resultCookitObj
}

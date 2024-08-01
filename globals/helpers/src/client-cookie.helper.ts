export type DocumentType = typeof document
type CookieObjType = Record<string, string>

export const getAllCookieClient = (document: DocumentType): CookieObjType => {
  const resultCookitObj = {}

  const cookieString = document.cookie
  const cookieRecordArray = cookieString.split(';')

  for (const cookieRecord of cookieRecordArray) {
    const [cookieName, cookieValue] = cookieRecord.split('=')
    resultCookitObj[cookieName] = cookieValue
  }

  return resultCookitObj
}

export const getTokenCookie = (document: DocumentType): string => {
  const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME as string
  const { [TOKEN_COOKIE_NAME]: token } = getAllCookieClient(document)
  return token
}

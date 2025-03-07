import type { CookieObjType } from './client-cookie.interfaces.js'
import type { DocumentType }  from './client-cookie.interfaces.js'

export const getAllCookieClient = (document: DocumentType): CookieObjType => {
  const resultCookitObj: CookieObjType = {}

  const cookieString = document.cookie
  const cookieRecordArray = cookieString.split(';')

  for (const cookieRecord of cookieRecordArray) {
    const [cookieName, cookieValue] = cookieRecord.split('=')
    resultCookitObj[cookieName] = cookieValue
  }

  return resultCookitObj
}

export const getTokenCookie = (document: DocumentType): string => {
  const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME ?? ''
  const { [TOKEN_COOKIE_NAME]: token } = getAllCookieClient(document)
  return token
}

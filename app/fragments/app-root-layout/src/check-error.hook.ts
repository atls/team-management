export const checkErrorHook = () => {
  const CURRENT_URL = new URL(window.location.href)
  const { searchParams } = CURRENT_URL
  const errorMessage = searchParams.get('errorMessage')
  const errorCode = searchParams.get('errorCode')
  return { errorMessage, errorCode }
}

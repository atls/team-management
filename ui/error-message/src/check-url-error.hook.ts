export const checkUrlErrorHook = () => {
  const CURRENT_URL = new URL(window.location.href)
  const { searchParams } = CURRENT_URL
  const text = searchParams.get('errorMessage')
  const code = searchParams.get('errorCode')
  return { text, code }
}

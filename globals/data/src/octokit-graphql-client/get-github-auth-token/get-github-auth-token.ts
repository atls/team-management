export const getGithubAuthToken = async (code: string) => {
  const fetchUrl = new URL('https://github.com/login/oauth/access_token')
  fetchUrl.searchParams.set('client_id', process.env.NEXT_PUBLIC_GH_CLIENT_ID as string)
  fetchUrl.searchParams.set('client_secret', process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string)
  fetchUrl.searchParams.set('code', code)

  const response = await fetch(fetchUrl, {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
  })

  const userAuth = await response.json()

  const { access_token: token } = userAuth

  return token
}

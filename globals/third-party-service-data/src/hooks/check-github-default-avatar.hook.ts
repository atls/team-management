export const checkGithubDefaultAvatar = async (githubAvatarUrl) => {
  const requestUrl = new URL(githubAvatarUrl)
  requestUrl.searchParams.set('s', `1000`)
  const response = await fetch(requestUrl)
  return
  // console.log(response)
}

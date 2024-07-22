import { Octokit } from '@octokit/core'

export const octokitRestClient = (token: string) => {
  const octokit = new Octokit({
    auth: token,
  })

  return octokit.request
}

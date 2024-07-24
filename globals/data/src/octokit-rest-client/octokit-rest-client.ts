import { Octokit } from '@octokit/core'

export const createOctokitRestClient = (token: string) => {
  const octokit = new Octokit({
    auth: token,
  })

  return octokit.request
}

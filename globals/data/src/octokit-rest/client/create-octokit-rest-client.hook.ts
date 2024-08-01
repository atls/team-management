import type { CreateOctokitRestClientType } from '../octokit-rest.interfaces.js'

import { Octokit }                          from '@octokit/core'

export const createOctokitRestClient: CreateOctokitRestClientType = (token: string) => {
  const octokit = new Octokit({
    auth: token,
  })

  return octokit.request
}

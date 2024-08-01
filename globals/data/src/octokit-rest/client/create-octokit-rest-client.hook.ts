import { Octokit }                     from '@octokit/core'

import { CreateOctokitRestClientType } from './create-octokit-rest-client.interface.js'

export const createOctokitRestClient: CreateOctokitRestClientType = (token: string) => {
  const octokit = new Octokit({
    auth: token,
  })

  return octokit.request
}

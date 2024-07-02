import { Octokit }   from 'octokit'

import { GET_USERS } from '../queries/index.js'

export const useOrganizations = async () => {
  const octokit = new Octokit({
    auth: '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',
  })
  const dataOrg = await octokit.graphql(GET_USERS)
  // const { data } = useQuery(GET_USERS)
  return { dataOrg }
}

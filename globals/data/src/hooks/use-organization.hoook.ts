import { Octokit }   from 'octokit'

import { GET_USERS } from '../queries/index.js'

export const useOrganizations = async () => {
  const { NEXT_MY_TOKEN } = process.env
  const octokit = new Octokit({
    auth: NEXT_MY_TOKEN,
  })
  const dataOrg = await octokit.graphql(GET_USERS)
  // const { data } = useQuery(GET_USERS)
  return { dataOrg }
}

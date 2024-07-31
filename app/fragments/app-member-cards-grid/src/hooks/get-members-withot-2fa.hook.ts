import { createOctokitRestClient }                from '@globals/data'
import { getGithubOrganizationMembersWithout2fa } from '@globals/data'

export const getMembersWithout2fa = async (token) => {
  const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME as string

  const membersWithou2fa = []

  const restClient = createOctokitRestClient(token)
  const query = getGithubOrganizationMembersWithout2fa({
    organizatoinName: defaultOrganizationName,
  }) as [any]

  const restResponse = await restClient(...query)

  if (restResponse.data.length) {
    for (const { id: memberId } of restResponse.data) {
      membersWithou2fa.push(memberId)
    }
  }

  return membersWithou2fa
}

import type { GetMembersWithout2faType }          from './get-members-withot-2fa.interfaces.js'

import { createOctokitRestClient }                from '@globals/data'
import { getGithubOrganizationMembersWithout2fa } from '@globals/data'

export const getMembersWithout2fa: GetMembersWithout2faType = async (token) => {
  const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME as string

  const membersWithou2fa: Array<string> = []

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

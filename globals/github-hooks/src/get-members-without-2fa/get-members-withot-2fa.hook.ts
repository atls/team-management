import type { GetMembersWithout2faType }                  from './get-members-withot-2fa.interfaces.js'
import type { GithubResponse }                            from './get-members-withot-2fa.interfaces.js'

import { requestOctokitRestData }                         from '@globals/data'
import { getGithubOrganizationMembersWithout2faGetQuery } from '@globals/data'

export const getMembersWithout2fa: GetMembersWithout2faType = async (document) => {
  const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME ?? ''

  const membersWithout2fa: Array<string> = []

  const query = getGithubOrganizationMembersWithout2faGetQuery({
    organizationName: defaultOrganizationName,
  })

  const response = (await requestOctokitRestData(document, query)) as GithubResponse

  if (!response.data) return []

  if (response.data.length) {
    for (const { id: memberId } of response.data) {
      membersWithout2fa.push(memberId)
    }
  }

  return membersWithout2fa
}

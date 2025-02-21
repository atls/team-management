import type { GetMembersWithout2faType }                  from './get-members-withot-2fa.interfaces.js'

import { requestOctokitRestData }                         from '@globals/data'
import { getGithubOrganizationMembersWithout2faGetQuery } from '@globals/data'

export const getMembersWithout2fa: GetMembersWithout2faType = async (document) => {
  const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME!

  const membersWithou2fa: Array<string> = []

  const query = getGithubOrganizationMembersWithout2faGetQuery({
    organizatoinName: defaultOrganizationName,
  })

  const response = (await requestOctokitRestData(document, query)) as any

  if (!response.data) return []

  if (response.data.length) {
    for (const { id: memberId } of response.data) {
      membersWithou2fa.push(memberId)
    }
  }

  return membersWithou2fa
}

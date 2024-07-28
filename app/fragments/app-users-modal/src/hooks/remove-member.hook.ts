import type { RemoveMemberType }         from './remove-member.interface.js'

import { createOctokitRestClient }       from '@globals/data'
import { removeOrganizationMemberQuery } from '@globals/data'
import { getTokenCookie }                from '@globals/helpers'

export const removeMemberHook: RemoveMemberType = async ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
  toast,
}) => {
  const token = getTokenCookie(document)

  try {
    const restClient = createOctokitRestClient(token)

    const query = removeOrganizationMemberQuery({
      memberLogin: removeMemberLogin,
      organizationLogin,
    }) as [any]

    await restClient(...query)

    const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
    setMembersData(newMembersData)
    toast.notify(`Пользователь <b>${removeMemberLogin}</b> удален из <b>${organizationLogin}</b>`)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.code)
  }
}

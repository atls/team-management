import type { RemoveMemberType }            from './remove-member.interface.js'

import { removeOrganizationMemberGetQuery } from '@globals/data'
import { requestOctokitRestData }           from '@globals/data'

export const removeMemberHook: RemoveMemberType = async ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
  toast,
}) => {
  try {
    const query = removeOrganizationMemberGetQuery({
      memberLogin: removeMemberLogin,
      organizationLogin,
    })

    await requestOctokitRestData(document, query)

    const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
    setMembersData(newMembersData)
    toast.notify(`Пользователь <b>${removeMemberLogin}</b> удален из <b>${organizationLogin}</b>`)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.code)
  }
}

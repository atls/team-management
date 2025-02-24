import type { RemoveMemberFromOrganizationType } from './remove-member-from-organization.interface.js'

import { createOctokitRestClient }               from '@globals/data'
import { removeOrganizationMemberGetQuery }      from '@globals/data'
import { getTokenCookie }                        from '@globals/helpers'

export const removeMemberFromOrganization: RemoveMemberFromOrganizationType = async ({
  toast,
  removeMemberLogin,
  organizationLogin,
  organizationsData,
  setOrganizationsData,
}) => {
  const token = getTokenCookie(document)

  try {
    const restClient = createOctokitRestClient(token)

    const query = removeOrganizationMemberGetQuery({
      memberLogin: removeMemberLogin,
      organizationLogin,
    })

    await restClient(...query)

    const newOrganizationsData = organizationsData.filter(
      ({ login }) => login !== organizationLogin
    )

    setOrganizationsData(newOrganizationsData)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.code)
  }
}

import { createOctokitRestClient }       from '@globals/data'
import { removeOrganizationMemberQuery } from '@globals/data'
import { getTokenCookie }                from '@globals/helpers'

export const removeMemberFromOrganization = async ({
  toast,
  removeMemberLogin,
  organizationLogin,
  organizationsData,
  setOrganizationsData,
}) => {
  const token = getTokenCookie(document)

  try {
    const restClient = createOctokitRestClient(token)

    const query = removeOrganizationMemberQuery({
      memberLogin: removeMemberLogin,
      organizationLogin,
    }) as [any]

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

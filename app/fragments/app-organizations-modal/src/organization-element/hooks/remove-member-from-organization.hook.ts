import { createOctokitRestClient }       from '@globals/data'
import { removeOrganizationMemberQuery } from '@globals/data'
import { getTokenCookie }                from '@globals/helpers'

export const removeMemberFromOrganization = async ({
  toast,
  organizationLogin,
  organizationsData,
  setOrganizationsData,
}) => {
  const token = getTokenCookie(document)

  try {
    // const restClient = createOctokitRestClient(token)
    //
    // const query = removeOrganizationMemberQuery({
    //   memberLogin: removeMemberLogin,
    //   organizationLogin,
    // })

    // await restClient(query as any)

    console.log(organizationsData)

    const newOrganizationsData = organizationsData.filter(
      ({ login }) => login !== organizationLogin
    )
    setOrganizationsData(newOrganizationsData)
    // toast.notify(`Пользователь <b>${removeMemberLogin}</b> удален из <b>${organizationLogin}</b>`)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.code)
  }
}

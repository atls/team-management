import { removeOrganizationMember } from '@globals/data'
import { getTokenCookie }           from '@globals/helpers'

export const removeMemberHook = ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
  toast,
}) => {
  const token = getTokenCookie(document)

  removeOrganizationMember({ token, memberLogin: removeMemberLogin, organizationLogin })
    .then(() => {
      const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
      setMembersData(newMembersData)
      toast.notify(`Пользователь <b>${removeMemberLogin}</b> удален из <b>${organizationLogin}</b>`)
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e)
      toast.error(e.message, e.code)
    })
}

import { removeOrganizationMember } from '@globals/data'
import { getTokenCookie }           from '@globals/helpers'

export const removeMemberHook = ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
  toastNotificationDispatch,
}) => {
  const token = getTokenCookie(document)

  removeOrganizationMember({ token, memberLogin: removeMemberLogin, organizationLogin }).then(
    () => {
      const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
      setMembersData(newMembersData)
      toastNotificationDispatch({
        type: 'notify',
        toastNotification: {
          type: 'base',
          text: `Пользователь <b>${removeMemberLogin}</b> удален из <b>${organizationLogin}</b>`,
        },
      })
    }
  )
}

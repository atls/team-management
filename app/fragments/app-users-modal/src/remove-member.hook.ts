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

  const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
  setMembersData(newMembersData)

  toastNotificationDispatch({
    type: 'set',
    errorMessage: { text: 'test message', code: 777 || 0 },
  })

  // removeOrganizationMember({ token, memberLogin: removeMemberLogin, organizationLogin }).then(
  //   () => {
  //     const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
  //     setMembersData(newMembersData)
  //   }
  // )
}

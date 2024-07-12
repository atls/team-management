import { removeOrganizationMember } from '@globals/data'
import { getTokenCookie }           from '@globals/helpers'

export const removeMemberHook = ({
  organizationLogin,
  removeMemberLogin,
  membersData,
  setMembersData,
}) => {
  const token = getTokenCookie(document)

  removeOrganizationMember({ token, memberLogin: removeMemberLogin, organizationLogin }).then(
    () => {
      const newMembersData = membersData.filter(({ login }) => login !== removeMemberLogin)
      setMembersData(newMembersData)
    }
  )
}

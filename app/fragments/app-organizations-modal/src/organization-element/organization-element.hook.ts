import { removeMemberFromOrganization } from './hooks/remove-member-from-organization.hook.js'

export const OrganizationElementHook = ({
  toast,
  memberLogin,
  organizationsData,
  setOrganizationsData,
  isRemoveRequestOpen,
  setRemoveRequestOpen,
}) => {
  const changeRemoveRequestStateHandler = () => {
    setRemoveRequestOpen(!isRemoveRequestOpen)
  }

  const removeOrganizationHandler = ({ organizationLogin }) =>
    removeMemberFromOrganization({
      toast,
      removeMemberLogin: memberLogin,
      organizationLogin,
      organizationsData,
      setOrganizationsData,
    })

  return { changeRemoveRequestStateHandler, removeOrganizationHandler }
}

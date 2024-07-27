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

  const removeOrganizationHandler = ({ organizationLogin }) => {
    return removeMemberFromOrganization({
      toast,
      organizationLogin,
      organizationsData,
      setOrganizationsData,
    })
    // TODO set organizations on parent
    // TODO if organizaitons length = 0, then delete from list
    console.log(`remove from organization ${organizationLogin}`)
    console.log(memberLogin)
  }

  return { changeRemoveRequestStateHandler, removeOrganizationHandler }
}

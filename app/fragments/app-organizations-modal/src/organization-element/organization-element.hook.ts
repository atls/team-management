import { OrganizationElementHookProps } from './organization-element.interfaces.js'
import { OrganizationProps }            from './organization-element.interfaces.js'
import { removeMemberFromOrganization } from './hooks/remove-member-from-organization.hook.js'

export const OrganizationElementHook = ({
  toast,
  memberLogin,
  organizationsData,
  setOrganizationsData,
  isRemoveRequestOpen,
  setRemoveRequestOpen,
}: OrganizationElementHookProps) => {
  const changeRemoveRequestStateHandler = () => {
    setRemoveRequestOpen(!isRemoveRequestOpen)
  }

  const removeOrganizationHandler = async ({ organizationLogin }: OrganizationProps) =>
    removeMemberFromOrganization({
      toast,
      removeMemberLogin: memberLogin,
      organizationLogin,
      organizationsData,
      setOrganizationsData,
    })

  return { changeRemoveRequestStateHandler, removeOrganizationHandler }
}

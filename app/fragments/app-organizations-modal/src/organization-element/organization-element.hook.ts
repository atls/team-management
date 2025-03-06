import type { OrganizationElementHookOutput }                               from './organization-element.interfaces.js'
import type { OrganizationElementHookProps } from './organization-element.interfaces.js'
import type { OrganizationProps }                                           from './organization-element.interfaces.js'

import { removeMemberFromOrganization }                                     from './hooks/index.js'

export const OrganizationElementHook = ({
  toast,
  memberLogin,
  organizationsData,
  setOrganizationsData,
  isRemoveRequestOpen,
  setRemoveRequestOpen,
}: OrganizationElementHookProps): OrganizationElementHookOutput => {
  const changeRemoveRequestStateHandler = (): void => {
    setRemoveRequestOpen(!isRemoveRequestOpen)
  }

  const removeOrganizationHandler = async ({
    organizationLogin,
  }: OrganizationProps): Promise<void> => {
    removeMemberFromOrganization({
      toast,
      removeMemberLogin: memberLogin,
      organizationLogin,
      organizationsData,
      setOrganizationsData,
    })
  }

  return { changeRemoveRequestStateHandler, removeOrganizationHandler }
}

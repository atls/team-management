import { useEffect }                     from 'react'

import { OrganizationCardsGridHookType } from './organization-cards-grid.interfaces.js'
import { getOrganizationsData }          from './hooks/index.js'

export const OrganizationCardsGridHook: OrganizationCardsGridHookType = ({
  organizationsData,
  organizationsLimit,
  organizationMembersLimit,
  setOrganizationsData,
  toast,
}) => {
  useEffect(() => {
    if (!organizationsData.length) {
      getOrganizationsData({
        organizationsLimit,
        organizationMembersLimit,
        setOrganizationsData,
        toast,
      })
    }
  }, [toast, organizationsData, setOrganizationsData, organizationMembersLimit, organizationsLimit])
}
import { useEffect }               from 'react'

import { MemberCardsGridHookType } from './member-cards-grid.interfaces.js'
import { getMembersData }          from './hooks/index.js'

export const MemberCardsGridHook: MemberCardsGridHookType = ({
  toast,
  organizationsLimit,
  organizationMembersLimit,
  membersData,
  setMembersData,
  setOrganizationsData,
}) => {
  useEffect(() => {
    if (!membersData.length) {
      getMembersData({
        toast,
        organizationsLimit,
        organizationMembersLimit,
        setMembersData,
        setOrganizationsData,
      })
    }
  }, [
    membersData,
    organizationMembersLimit,
    organizationsLimit,
    setMembersData,
    setOrganizationsData,
    toast,
  ])

  // TODO get pending members data
}

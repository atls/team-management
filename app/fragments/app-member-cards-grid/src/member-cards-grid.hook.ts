import { useEffect }               from 'react'

import { MemberCardsGridHookType } from './member-cards-grid.interfaces.js'
import { getMembersData }          from './hooks/index.js'

export const MemberCardsGridHook: MemberCardsGridHookType = ({
  toast,
  organizationsLimit,
  organizationMembersLimit,
  membersData,
  setMembersData,
  organizationsData,
  setOrganizationsData,
}) => {
  useEffect(() => {
    if (!membersData.length) {
      getMembersData({
        organizationsLimit,
        organizationMembersLimit,
        setMembersData,
        setOrganizationsData,
        toast,
      })
    }
  }, [membersData])

  // TODO get pending members data
  // TODO set organizations data by 1st query
}

import { useEffect }                 from 'react'

import { UseGetMembersDataHookType } from './use-get-members-data.interfaces.js'
import { getMembersData }            from './hooks/index.js'

export const useGetMembersDataHook: UseGetMembersDataHookType = ({
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

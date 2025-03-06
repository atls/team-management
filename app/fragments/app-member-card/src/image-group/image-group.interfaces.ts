import type { OrganizationDataType }            from '@globals/data'
import type { Dispatch }                        from 'react'

import type { SetStateAction }        from 'react'

import type { MemberWithOrganizationsDataType } from '../member-card.interfaces.js'

export type ImageGroupProps = {
  memberData: MemberWithOrganizationsDataType
  memberOrganizationsDataState: [
    organizations: Array<OrganizationDataType>,
    setOrganizations: Dispatch<SetStateAction<Array<OrganizationDataType>>>,
  ]
  timerMilliseconds?: number
}

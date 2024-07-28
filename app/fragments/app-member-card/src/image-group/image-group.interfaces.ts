import type { OrganizationMemberType } from '@globals/data'
import type { OrganizationDataType }   from '@globals/data'

import { useState }                    from 'react'

export type ImageGroupProps = {
  memberData: OrganizationMemberType
  memberOrganizationsDataState: ReturnType<typeof useState<Array<OrganizationDataType>>>
  timerMilliseconds?: number
}

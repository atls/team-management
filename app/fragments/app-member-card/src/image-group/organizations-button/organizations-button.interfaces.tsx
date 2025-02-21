import type { OrganizationDataType } from '@globals/data'
import type { useState }             from 'react'

export type OrganizationsButtonType = {
  memberOrganizationsDataState: ReturnType<typeof useState<Array<OrganizationDataType>>>
  memberLogin: string
}

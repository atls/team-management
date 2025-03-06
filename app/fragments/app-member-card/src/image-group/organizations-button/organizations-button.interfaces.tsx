import type { OrganizationDataType }     from '@globals/data'
import type { Dispatch }                 from 'react'

import type { SetStateAction } from 'react'

export type OrganizationsButtonType = {
  memberOrganizationsDataState: [
    organizations: Array<OrganizationDataType>,
    setOrganizations: Dispatch<SetStateAction<Array<OrganizationDataType>>>,
  ]
  memberLogin: string
}

export interface GetConstantsOutput {
  ICON_PROPS: { color: string; width: number; height: number }
}

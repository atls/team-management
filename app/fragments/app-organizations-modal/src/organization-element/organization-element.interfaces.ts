import type { OrganizationDataType } from '@globals/data'

import { Dispatch }                  from 'react'
import { SetStateAction }            from 'react'

import { ToastType }                 from '@stores/toast-notification'

export type OrganizationElementProps = {
  organizationsData: Array<OrganizationDataType>
  organizationData: OrganizationDataType
  setOrganizationsData: (organizatoinsData: Array<OrganizationDataType>) => void
  memberLogin: string
}

export interface OrganizationElementHookProps {
  toast: ToastType
  memberLogin: string
  organizationsData: Array<OrganizationDataType>
  setOrganizationsData: (organizatoinsData: Array<OrganizationDataType>) => void
  isRemoveRequestOpen: boolean
  setRemoveRequestOpen: Dispatch<SetStateAction<boolean>>
}

export interface OrganizationProps {
  organizationLogin: string
}

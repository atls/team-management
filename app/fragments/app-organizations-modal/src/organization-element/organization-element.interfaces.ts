import type { OrganizationDataType } from '@globals/data'
import type { ToastType }            from '@stores/toast-notification'
import type { Dispatch }             from 'react'
import type { SetStateAction }       from 'react'

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

export interface GetConstantsOutput {
  ICON_PROPS: { color: string; width: number; height: number }
}

export interface OrganizationElementHookOutput {
  changeRemoveRequestStateHandler: VoidFunction
  removeOrganizationHandler: ({ organizationLogin }: OrganizationProps) => Promise<void>
}

import type { OrganizationDataType } from '@globals/data'

export type OrganizationElementProps = {
  organizationsData: Array<OrganizationDataType>
  organizationData: OrganizationDataType
  setOrganizationsData: (organizatoinsData: Array<OrganizationDataType>) => void
  memberLogin: string
}

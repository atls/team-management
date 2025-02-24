import type { OrganizationMemberDataType } from '@globals/data'

export type GetUniqueItemsType = (allDataItem: Array<any>) => Array<any>

export interface LinkMemberToOrganizationsProps {
  uniqueMembersData: Array<OrganizationMemberDataType>
  memberOrganizations: Record<string, Array<string>>
}

import type { OrganizationMemberDataType } from '@globals/data'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetUniqueItemsType = (allDataItem: Array<any>) => Array<any>

export interface LinkMemberToOrganizationsProps {
  uniqueMembersData: Array<OrganizationMemberDataType>
  memberOrganizations: Record<string, Array<string>>
}

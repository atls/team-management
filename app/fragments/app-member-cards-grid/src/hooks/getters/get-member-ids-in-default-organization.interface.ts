import type { OrganizationMemberDataType } from '@globals/data'

export type GetMemberIdsInDefaultOrganizationType = (
  membersData: Array<OrganizationMemberDataType>
) => Array<string>

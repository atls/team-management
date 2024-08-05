import type { OrganizationDataType } from '@globals/data'

export type GetResponseOrganizationsDataType = ({
  organizationsLimit,
  organizationMembersLimit,
}: {
  organizationsLimit: number
  organizationMembersLimit: number
}) => Promise<Array<OrganizationDataType>>

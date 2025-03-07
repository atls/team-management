import type { OrganizationDataType }            from '@globals/data'

import type { MemberWithOrganizationsDataType } from '../member-card.interfaces.js'

export type GetMemberOrganizationsDataType = ({
  memberData,
  organizationsData,
}: {
  memberData: MemberWithOrganizationsDataType
  organizationsData: Array<OrganizationDataType>
}) => Array<OrganizationDataType>

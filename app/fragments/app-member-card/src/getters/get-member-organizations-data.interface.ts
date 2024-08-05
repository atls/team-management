import type { MemberWithOrganizationsDataType } from '../member-card.interfaces.js'
import type { OrganizationDataType }            from '@globals/data'

export type GetMemberOrganizationsDataType = ({
  memberData,
  organizationsData,
}: {
  memberData: MemberWithOrganizationsDataType
  organizationsData: Array<OrganizationDataType>
}) => Array<OrganizationDataType>

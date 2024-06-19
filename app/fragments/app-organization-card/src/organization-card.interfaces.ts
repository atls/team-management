export type OrganizationDataType = {
  organizationId: number
  organizationTitle: string
  organizationDescription: string
  organizationMembersQuantity: number
  organizationCoverSrc: string
}

export interface OrganizationCardProps {
  organizationData: OrganizationDataType
}

export type OrganizationDataType = {
  id: number
  name: string
  description: string
  membersWithRole: { totalCount: number }
  avatarUrl: string
  viewerCanAdminister: boolean
}

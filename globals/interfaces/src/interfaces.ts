// TODO нужны ли нам эти типы, если data приходит с query,
// а типы для query генерируются?

export type OrganizationDataType = {
  id: number
  login: string
  name: string
  description: string
  membersWithRole: { totalCount: number }
  avatarUrl: string
  viewerCanAdminister: boolean
}

export type OrganizationMemberDataType = {
  id: string
  login: string
  url: string
  name: string
  bio?: string
  avatarUrl: string
}

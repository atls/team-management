export interface UserCardProps {
  name?: string
  position?: string
  time?: string
  organizations?: string | number
  avatar: string
  handleOrganizations?: () => void
  organizationsData: []
}

export interface UserCardProps {
  name?: string
  position?: string
  time?: string
  organizations?: string | number
  avatar: string
  checked?: boolean
  handleOrganizations: () => void
}

export interface UserCardProps {
  name?: string
  position?: string
  time?: string
  organizations?: string | number
  avatar: string
  organizationsData: Organizations[]
}

interface Organizations {
  name: string
  organizationLogo: string
}

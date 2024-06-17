export interface UserCardProps {
  name?: string
  position?: string
  // email: string ???
  avatar: string
  organizations?: string | number
  organizationsData: Organizations[]
  time?: string
}

interface Organizations {
  name: string
  organizationLogo: string
}

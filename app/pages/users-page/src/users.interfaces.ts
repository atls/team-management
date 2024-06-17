export interface UserData {
  id: number
  name: string
  position: string
  email: string
  avatar: string
  organizations: Organizations[]
  time: string
}

interface Organizations {
  name: string
  organizationLogo: string
}

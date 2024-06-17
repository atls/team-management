export interface UserCardProps {
  name: string
  position: string
  avatar: string
  organizations: string | number
  organizationsData: Organization[]
  time: string
  services: CheckboxInt[]
}

interface Organization {
  name: string
  organizationLogo: string
}
export interface CheckboxInt {
  id: number
  name: string
  checked: boolean
}

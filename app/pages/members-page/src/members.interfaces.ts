export interface UserData {
  id: number
  name: string
  position: string
  email: string
  avatar: string
  organizations: Organizations[]
  time: string
  services: CheckboxInt[]
}

interface Organizations {
  name: string
  organizationLogo: string
}

interface CheckboxInt {
  id: number
  name: string
  checked: boolean
}

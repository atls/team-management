export interface OrganizationsModalProps {
  organization: Organizations[]
  open: boolean
  onBackdropClick: () => void
}

interface Organizations {
  name: string
  organizationLogo: string
}

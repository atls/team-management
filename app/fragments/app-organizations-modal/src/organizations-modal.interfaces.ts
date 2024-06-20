export interface OrganizationsModalProps {
  organizationsData: Organization[]
  open: boolean
  onBackdropClick: () => void
}

export interface Organization {
  name: string
  organizationLogo: string
}

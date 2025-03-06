export type RemoveRequestGroupProps = {
  organizationLogin: string
  changeRemoveRequestStateHandler: () => void
  removeOrganizationHandler: ({ organizationLogin }: { organizationLogin: string }) => Promise<void>
}

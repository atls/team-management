import type { OrganizationTeamType } from '@globals/data'
import type { ToastType }            from '@stores/toast-notification'

export type GetOrganizationTeamsType = ({
  organizationId,
  setTeamsData,
  toast,
}: {
  organizationId: string
  setTeamsData: (teamsData: Array<OrganizationTeamType>) => void
  toast: ToastType
}) => Promise<void>

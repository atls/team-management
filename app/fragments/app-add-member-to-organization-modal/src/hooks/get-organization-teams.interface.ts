import type { OrganizationTeamType } from '@globals/data'
import type { ToastType }            from '@store/toast-notification'

export type GetOrganizationTeamsType = ({
  organizationId,
  setTeamsData,
  toast,
}: {
  organizationId: string
  setTeamsData: (teamsData: OrganizationTeamType) => void
  toast: ToastType
}) => void

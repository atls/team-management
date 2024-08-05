import type { OrganizationDataType }        from '@globals/data'
import type { MemberWithOnbordingDataType } from '@globals/data'
import type { ThemeType }                   from '@ui/theme'

export type MemberWithOrganizationsDataType = MemberWithOnbordingDataType & {
  organizations: Array<string>
}

export type MemberCardProps = {
  timerMilliseconds?: number
  memberData: MemberWithOrganizationsDataType
  organizationsData: Array<OrganizationDataType>
}

export type GetOnbordingConditionListType = ({
  theme,
}: {
  theme: ThemeType
}) => Array<{ conditionName: string; conditionIcon: JSX.Element }>

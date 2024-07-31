import type { OrganizationDataType }        from '@globals/data'
import type { MemberWithOnbordingDataType } from '@globals/data'

export type MemberCardProps = {
  timerMilliseconds?: number
  memberData: MemberWithOnbordingDataType
  organizationsData: Array<OrganizationDataType>
}

import type { OnbordingConditionDataType } from './onbording-condition-element/index.js'
import type { OrganizationDataType }       from '@globals/data'

// TODO interface
export type MemberWithOnbordingDataType = {
  onbordingData: Array<OnbordingConditionDataType>
}

export type MemberCardProps = {
  timerMilliseconds?: number
  memberData: MemberWithOnbordingDataType
  organizationsData: Array<OrganizationDataType>
}

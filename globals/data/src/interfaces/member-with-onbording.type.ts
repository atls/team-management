import type { OrganizationMemberDataType } from './index.js'
import type { OnbordingConditionDataType } from './onbording-condition-data.type.js'

export type MemberWithOnbordingDataType = OrganizationMemberDataType & {
  onbordingData: Array<OnbordingConditionDataType>
}

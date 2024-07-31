import type { OrganizationMemberDataType } from './index.js'
import type { OnbordingConditionDataType } from '@app/onbording-condition-element'

export type MemberWithOnbordingDataType = OrganizationMemberDataType & {
  onbordingData: Array<OnbordingConditionDataType>
}

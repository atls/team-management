export type OnbordingConditionDataType = {
  conditionName: string
  conditionState: boolean
  conditionDisplayName: string
  conditionIconName: string
}

export type OnbordingConditionElementProps = {
  conditionData: OnbordingConditionDataType
  divider: boolean
}

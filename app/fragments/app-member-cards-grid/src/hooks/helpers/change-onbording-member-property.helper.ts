import type { ChangeOnbordingMemberPropertyType } from './change-onbording-member-property.interface.js'

export const changeOnbordingMemberProperty: ChangeOnbordingMemberPropertyType = (
  memberData,
  changeConditionName,
  newConditionValue = true
) => {
  const { onbordingData: inputOnbordingData } = memberData

  const outputOnbordingData = inputOnbordingData.map((conditionData) => {
    if (conditionData.conditionName === changeConditionName) {
      return {
        ...conditionData,
        conditionState: newConditionValue,
      }
    }
    return conditionData
  })

  const outputMemberData = {
    ...memberData,
    onbordingData: outputOnbordingData,
  }

  return outputMemberData
}

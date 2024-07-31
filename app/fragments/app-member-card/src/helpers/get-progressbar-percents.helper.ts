import type { OnbordingConditionDataType } from '@app/onbording-condition-element'

export const getProgressbarPercents = (onbordingData: Array<OnbordingConditionDataType>) => {
  const allOnbordingConditionLength = onbordingData.length
  const checkedOnbordingConditionLength = onbordingData.filter(
    ({ conditionState }) => conditionState
  ).length

  const proressPercent = Math.round(
    (checkedOnbordingConditionLength / allOnbordingConditionLength) * 100
  )

  return proressPercent
}

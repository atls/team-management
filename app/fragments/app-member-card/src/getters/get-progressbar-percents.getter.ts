import type { GetProgressbarPercentsType } from './get-progressbar-percents.interface.js'

export const getProgressbarPercents: GetProgressbarPercentsType = (onbordingData) => {
  const allOnbordingConditionLength = onbordingData.length
  const checkedOnbordingConditionLength = onbordingData.filter(
    ({ conditionState }) => conditionState
  ).length

  const proressPercent = Math.round(
    (checkedOnbordingConditionLength / allOnbordingConditionLength) * 100
  )

  return proressPercent
}

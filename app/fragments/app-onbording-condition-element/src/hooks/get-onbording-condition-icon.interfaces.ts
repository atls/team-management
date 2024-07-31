import { ThemeType } from '@ui/theme'

export type GetOnbordingConditionIconType = ({
  theme,
  conditionIconName,
  conditionName,
}: {
  theme: ThemeType
  conditionIconName: string
  conditionName: string
}) => JSX.Element

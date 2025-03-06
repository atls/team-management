export type TimerProps = { initialMilliseconds: number }

export type TimerHookType = ({
  currentMilliseconds,
  setCurrentMilliseconds,
  setFormattedTime,
}: {
  currentMilliseconds: number
  setCurrentMilliseconds: (milleseconds: number) => void
  setFormattedTime: (formattedTime: string) => void
}) => void

export interface GetConstantsOutput {
  ICON_PROPS: { color: string; width: number; height: number }
}

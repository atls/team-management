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

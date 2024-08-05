import type { TimerHookType } from './timer.interfaces.js'

import { useEffect }          from 'react'

import { formatMilliseconds } from './helpers/index.js'

export const TimerHook: TimerHookType = ({
  currentMilliseconds,
  setCurrentMilliseconds,
  setFormattedTime,
}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMilliseconds(currentMilliseconds + 1000)
    }, 1000)
    return () => clearInterval(timer)
  })

  useEffect(() => {
    const formattedTime = formatMilliseconds(currentMilliseconds)
    setFormattedTime(formattedTime)
  }, [currentMilliseconds, setFormattedTime])
}

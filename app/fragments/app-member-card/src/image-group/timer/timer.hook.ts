import { useEffect }          from 'react'

import { formatMilliseconds } from './helpers/index.js'

// TODO interface
export const TimerHook = ({ currentMilliseconds, setCurrentMilliseconds, setFormattedTime }) => {
  // TODO to hooks
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMilliseconds(currentMilliseconds + 1000)
    }, 1000)
    return () => clearInterval(timer)
  })

  useEffect(() => {
    const formattedTime = formatMilliseconds(currentMilliseconds)
    setFormattedTime(formattedTime)
  }, [currentMilliseconds])
}

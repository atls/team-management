export const Ti
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

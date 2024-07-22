import { SEARCH_DELAY_MS } from './github-search-users-input.constants.js'

export const inputChangeHook = ({
  e,
  isClientTyping,
  setClientTyping,
  inputValueDispatch,
  suggestedItemsDispatch,
  activeSearchTimeoutId,
  setActiveSearchTimeoutId,
}) => {
  const inputValueString = e.target.value

  suggestedItemsDispatch({
    type: 'clean',
  })

  if (!isClientTyping) {
    setClientTyping(true)
  }

  inputValueDispatch({
    type: 'set',
    inputValue: inputValueString,
  })

  if (!inputValueString) {
    suggestedItemsDispatch({
      type: 'clean',
    })
  }

  clearTimeout(activeSearchTimeoutId)
  const timeoutId = setTimeout(async () => {
    setClientTyping(false)
  }, SEARCH_DELAY_MS)

  setActiveSearchTimeoutId(timeoutId)
}

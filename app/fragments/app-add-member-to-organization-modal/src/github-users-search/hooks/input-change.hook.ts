import type { InputChangeProps } from './input-change.interfaces.js'

import { SEARCH_DELAY_MS }       from '../github-users-search.constants.js'

export const inputChangeHook = ({
  isClientTyping,
  setClientTyping,
  activeSearchTimeoutId,
  setActiveSearchTimeoutId,
}: InputChangeProps) => {
  if (!isClientTyping) {
    setClientTyping(true)
  }

  clearTimeout(activeSearchTimeoutId)
  const timeoutId = setTimeout(async () => {
    setClientTyping(false)
  }, SEARCH_DELAY_MS) as never

  setActiveSearchTimeoutId(timeoutId)
}

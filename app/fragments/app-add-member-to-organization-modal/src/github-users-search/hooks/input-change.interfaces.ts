import type { Dispatch }       from 'react'
import type { SetStateAction } from 'react'

export interface InputChangeProps {
  isClientTyping: boolean
  setClientTyping: Dispatch<SetStateAction<boolean>>
  activeSearchTimeoutId: number
  setActiveSearchTimeoutId: Dispatch<SetStateAction<number>>
}

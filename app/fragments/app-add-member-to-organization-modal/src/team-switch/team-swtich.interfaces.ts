import type { ChangeEvent } from 'react'

export interface TeamSwitchProps {
  teamName: string
  onChange: (e: ChangeEvent<HTMLInputElement> | boolean) => void
}

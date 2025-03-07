import type { MouseEvent } from 'react'

export interface DeleteButtonProps {
  deleteButton: boolean
  onClick: (e: MouseEvent) => void
}

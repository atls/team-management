import type { JSX } from 'react'

export interface SidebarItemProps {
  title: string
  href: string
  active: boolean
  icon?: JSX.Element
}

import type { PropsWithChildren } from 'react'

export type MessagesType = Record<string, string>

export interface RootLayoutProps extends PropsWithChildren {
  messages: MessagesType
}

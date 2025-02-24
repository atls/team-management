import { PropsWithChildren } from 'react'

export interface MessagesType {
  [key: string]: string
}

export interface RootLayoutProps extends PropsWithChildren {
  messages: MessagesType
}

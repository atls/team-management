import type { JSX }             from 'react'

import type { RootLayoutProps } from './root-layout.interfaces.js'

import React                    from 'react'

import { RootLayoutClient }     from './root-layout.client.js'
import { RootLayoutServer }     from './root-layout.server.js'

const RootLayout = async ({ children, messages }: RootLayoutProps): Promise<JSX.Element> => {
  await RootLayoutServer()
  return <RootLayoutClient messages={messages}>{children}</RootLayoutClient>
}

export default RootLayout

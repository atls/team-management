import React                from 'react'

import { RootLayoutClient } from './root-layout.client.js'
import { RootLayoutServer } from './root-layout.server.js'

const RootLayout = async ({ children, messages }) => {
  await RootLayoutServer()
  return <RootLayoutClient messages={messages}>{children}</RootLayoutClient>
}

export default RootLayout

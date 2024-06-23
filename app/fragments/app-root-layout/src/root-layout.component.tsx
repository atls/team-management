import React                from 'react'

import { RootLayoutClient } from './root-layout.client.js'
import { RootLayoutServer } from './root-layout.server.js'

const RootLayout = async ({ children }) => {
  await RootLayoutServer()
  return <RootLayoutClient>{children}</RootLayoutClient>
}

export default RootLayout

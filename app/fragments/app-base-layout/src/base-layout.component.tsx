import React                from 'react'

import { BaseLayoutClient } from './base-layout.client.js'
import { BaseLayoutServer } from './base-layout.server.js'

export const BaseLayout = async ({ children }) => {
  const baseLayoutData = await BaseLayoutServer()
  return <BaseLayoutClient {...baseLayoutData}>{children}</BaseLayoutClient>
}

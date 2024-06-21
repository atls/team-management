import { RootLayoutClient } from './layout.client.js'
import { RootLayoutServer } from './layout.server.js'

const RootLayout = async ({ children }) => {
  await RootLayoutServer()
  return <RootLayoutClient>{children}</RootLayoutClient>
}

export default RootLayout

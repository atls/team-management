import type { ReactElement } from 'react'

import { Stack }             from 'expo-router'
import React                 from 'react'

export default (): ReactElement => {
  return <Stack screenOptions={{ headerShown: false }} />
}

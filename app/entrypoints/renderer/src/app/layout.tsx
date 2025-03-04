import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import BaseRootLayout             from '@app/root-layout'

import messages                   from '../../locales/ru.json'

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <BaseRootLayout messages={messages}>{children}</BaseRootLayout>
)

export default RootLayout

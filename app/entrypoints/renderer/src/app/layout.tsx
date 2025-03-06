import type { JSX }               from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import BaseRootLayout             from '@app/root-layout'

import messages                   from '../../locales/ru.json'

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => (
  // @ts-expect-error Async Server Component
  <BaseRootLayout messages={messages}>{children}</BaseRootLayout>
)

export default RootLayout

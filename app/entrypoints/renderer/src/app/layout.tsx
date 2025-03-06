import type { JSX }                    from 'react'

import type { PropsWithChildren } from 'react'

import React                          from 'react'

import BaseRootLayout                 from '@app/root-layout'

import messages                       from '../../locales/ru.json'

// @ts-expect-error Async Server Component
const RootLayout = ({ children }: PropsWithChildren): JSX.Element => (
  <BaseRootLayout messages={messages}>{children}</BaseRootLayout>
)

export default RootLayout

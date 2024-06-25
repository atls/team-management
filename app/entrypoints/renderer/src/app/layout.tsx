import React          from 'react'

import BaseRootLayout from '@app/root-layout'

import messages       from '../../locales/ru.json'

// @ts-expect-error Async Server Component
const RootLayout = ({ children }) => <BaseRootLayout messages={messages}>{children}</BaseRootLayout>

export default RootLayout

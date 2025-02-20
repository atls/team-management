/* eslint-disable */

import { Suspense }   from 'react'
import React          from 'react'

import { BaseLayout } from '@app/base-layout'
import { Loading }    from '@app/loading'

const Layout = ({ children }) => (
  <Suspense fallback={<Loading />}>
    {/* @ts-expect-error Async Server Component */}
    <BaseLayout children={children} />
  </Suspense>
)

export default Layout

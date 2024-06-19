import React          from 'react'
import { Suspense }   from 'react'

import { BaseLayout } from '@app/base-layout'
import { Loading }    from '@app/loading'

const Layout = ({ children }) => (
  <BaseLayout>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </BaseLayout>
)

export default Layout

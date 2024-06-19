import { BaseLayout } from '@app/base-layout'
import { Loading }    from '@app/loading'

import React          from 'react'
import { Suspense }   from 'react'

const Layout = ({ children }) => (
  <BaseLayout>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </BaseLayout>
)

export default Layout

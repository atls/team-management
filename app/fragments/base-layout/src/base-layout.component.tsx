import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { ThemeSelector }     from '@app/theme-selector'
import { Row }               from '@ui/layout'
import { Sidebar }           from '@ui/sidebar'

// TODO change interface
export const BaseLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Row>
      <ThemeSelector />
      <Sidebar />
      {children}
    </Row>
  )
}

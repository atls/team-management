import { useTheme }          from '@emotion/react'

import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { ThemeSelector }     from '@app/theme-selector'
import { UsersTitle }        from '@app/users-title'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Sidebar }           from '@ui/sidebar'

// TODO change interface
export const BaseLayout: FC<PropsWithChildren<any>> = ({ children }) => {
  const theme: any = useTheme()
  return (
    <Row>
      <ThemeSelector />
      <Sidebar src='' />
      <Column
        minHeight='100vh'
        margin='0 auto'
        gap={theme.spaces.large}
        justifyContent='flex-start'
        alignItems='flex-start'
        padding='110px 40px 0'
        backgroundColor={theme.colors.baseLayout.background}
      >
        <UsersTitle />
        {children}
      </Column>
    </Row>
  )
}

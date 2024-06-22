import styled                      from '@emotion/styled'
import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'

import { Divider }                 from '@ui/divider'
import { Column }                  from '@ui/layout'
import { Box }                     from '@ui/layout'
import { Logo }                    from '@ui/logo'
import { ThemeType }               from '@ui/theme'

import { SidebarItem }             from './item/item.component.js'
import { Pin }                     from './pin/pin.component.js'
import { Viewer }                  from './viewer/viewer.component.js'
import { baseSidebarStyles }       from './sidebar.styles.js'
import { shapeSidebarStyles }      from './sidebar.styles.js'
import { appearanceSidebarStyles } from './sidebar.styles.js'

// TODO theme props
const SidebarWrapper = styled(Column)(
  baseSidebarStyles,
  shapeSidebarStyles,
  appearanceSidebarStyles
)

// TODO interfaces
export const Sidebar: FC<any> = ({ name, email, src: avatarSrc }) => {
  const theme = useTheme() as ThemeType

  // TODO some styles to theme
  // TODO personal icon for route
  const items = [
    { title: 'dashboard', href: '/users' },
    { title: 'organizations', href: 'organizations' },
  ]

  return (
    <Box>
      <SidebarWrapper>
        <Box width='100%' justifyContent='center'>
          <Logo />
        </Box>
        <Column>
          {items.map((item) => (
            <SidebarItem {...item} />
          ))}
        </Column>
        <Pin />
        <Box padding='0 20px'>
          <Divider height={1} />
        </Box>
        <Viewer name={name} email={email} avatarSrc={avatarSrc} />
      </SidebarWrapper>
    </Box>
  )
}

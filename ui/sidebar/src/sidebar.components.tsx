import styled                      from '@emotion/styled'
import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'
import { usePathname }             from 'next/navigation'
import { useState }                from 'react'

import { Divider }                 from '@ui/divider'
import { OrganizationsIcon }       from '@ui/icons'
import { Column }                  from '@ui/layout'
import { Box }                     from '@ui/layout'
import { ThemeType }               from '@ui/theme'

import { AtlantisLogo }            from './atlantis-logo/index.js'
import { SidebarItem }             from './item/index.js'
import { Pin }                     from './pin/index.js'
import { SidebarStateContext }     from './sidebar.context.js'
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
  const pathname = usePathname()

  // TODO interface
  const [isSidebarOpened, setSidebarOpened] = useState(false)

  // TODO some styles to theme
  const items = [
    { title: 'Users', href: '/users' },
    { title: 'Organizations', href: '/organizations', icon: <OrganizationsIcon /> },
  ]

  // TODO devider to component

  return (
    <SidebarStateContext.Provider value={isSidebarOpened}>
      <Box>
        <SidebarWrapper isSidebarOpened={isSidebarOpened}>
          <AtlantisLogo />
          <Column gap={theme.spaces.miniIncreased}>
            {items.map((item) => (
              <SidebarItem {...item} active={pathname === item.href} />
            ))}
          </Column>
          <Pin setSidebarState={setSidebarOpened} />
          <Box padding='0 20px'>
            <Divider height={1} />
          </Box>
          <Viewer name={name} email={email} avatarSrc={avatarSrc} />
        </SidebarWrapper>
      </Box>
    </SidebarStateContext.Provider>
  )
}

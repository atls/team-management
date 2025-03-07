import type { ThemeType }           from '@ui/theme'
import type { ThemeVariantType }    from '@ui/theme'
import type { FC }                  from 'react'

import type { SidebarProps }        from './sidebar.interfaces.js'

import { useTheme }                 from '@emotion/react'
// @ts-expect-error:next-line
import { usePathname }              from 'next/navigation'
import { useState }                 from 'react'
import React                        from 'react'

import { Box }                      from '@ui/layout'

import { AtlantisLogo }             from './atlantis-logo/index.js'
import { SidebarItem }              from './item/index.js'
import { OrganizatoinSettings }     from './organization-settings/index.js'
import { Pin }                      from './pin/index.js'
import { SidebarDivider }           from './sidebar-divider/index.js'
import { SidebarStateContext }      from './sidebar.context.js'
import { Viewer }                   from './viewer/viewer.component.js'
import { Wrapper }                  from './wrapper/index.js'
import { itemList }                 from './sidebar.constants.js'
import { changeSidebarVisibleHook } from './sidebar.hooks.js'

export const Sidebar: FC<SidebarProps> = ({ name, email, avatarUrl, url }) => {
  const theme = useTheme() as ThemeType
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const pathname = usePathname()

  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(true)
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true)

  const states = {
    isSidebarOpened,
    setSidebarOpened: setIsSidebarOpened,
    isSidebarVisible,
    setSidebarVisible: setIsSidebarVisible,
  }

  return (
    <SidebarStateContext.Provider value={isSidebarOpened}>
      <Wrapper states={states}>
        <AtlantisLogo activeTheme={theme.colors.activeTheme as ThemeVariantType} />
        <Box height='100%' flexDirection='column' gap={theme.spaces.miniIncreased}>
          {itemList.map((itemData) => (
            <SidebarItem key={itemData.title} {...itemData} active={pathname === itemData.href} />
          ))}
        </Box>
        <Pin
          visibleHook={() => {
            changeSidebarVisibleHook(setIsSidebarVisible)
          }}
        />
        <SidebarDivider />
        <Viewer name={name} email={email} avatarUrl={avatarUrl} url={url} />
        <OrganizatoinSettings theme={theme} isSidebarOpened={isSidebarOpened} />
      </Wrapper>
    </SidebarStateContext.Provider>
  )
}

import { useTheme }                 from '@emotion/react'

import React                        from 'react'
import { FC }                       from 'react'
// @ts-ignore:next-line
import { usePathname }              from 'next/navigation'
import { useState }                 from 'react'

import { Column }                   from '@ui/layout'
import { ThemeType }                from '@ui/theme'
import { ThemeVariantType }         from '@ui/theme'

import { AtlantisLogo }             from './atlantis-logo/index.js'
import { SidebarItem }              from './item/index.js'
import { Pin }                      from './pin/index.js'
import { SidebarDivider }           from './sidebar-divider/index.js'
import { SidebarStateContext }      from './sidebar.context.js'
import { SidebarProps }             from './sidebar.interfaces.js'
import { Viewer }                   from './viewer/viewer.component.js'
import { Wrapper }                  from './wrapper/index.js'
import { changeSidebarVisibleHook } from './sidebar.hooks.js'
import { itemList }                 from './wrapper/wrapper.constants.js'

export const Sidebar: FC<SidebarProps> = ({ name, email, avatarUrl, url }) => {
  const theme = useTheme() as ThemeType
  const pathname = usePathname()

  const [isSidebarOpened, setSidebarOpened] = useState<boolean>(true)
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true)

  const states = {
    isSidebarOpened,
    setSidebarOpened,
    isSidebarVisible,
    setSidebarVisible,
  }

  return (
    <SidebarStateContext.Provider value={isSidebarOpened}>
      <Wrapper states={states}>
        <AtlantisLogo activeTheme={theme.colors.activeTheme as ThemeVariantType} />
        <Column gap={theme.spaces.miniIncreased}>
          {itemList.map((itemData) => (
            <SidebarItem {...itemData} active={pathname === itemData.href} />
          ))}
        </Column>
        <Pin visibleHook={() => changeSidebarVisibleHook(setSidebarVisible)} />
        <SidebarDivider />
        <Viewer name={name} email={email} avatarUrl={avatarUrl} url={url} />
      </Wrapper>
    </SidebarStateContext.Provider>
  )
}

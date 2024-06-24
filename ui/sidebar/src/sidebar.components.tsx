import styled                      from '@emotion/styled'
import { useTheme }                from '@emotion/react'

import React                       from 'react'
import { FC }                      from 'react'
import { motion }                  from 'framer-motion'
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

const MotionSidebarWrapper = motion(SidebarWrapper)

const motionVariants = {
  visible: {
    marginLeft: 0,
    width: 'min-content',
  },
  invisible: {
    marginLeft: -1.2 * (240 + 32),
  },
}

// TODO interfaces
export const Sidebar: FC<any> = ({ name, email, src: avatarSrc }) => {
  const theme = useTheme() as ThemeType
  const pathname = usePathname()

  // TODO interface
  const [isSidebarOpened, setSidebarOpened] = useState(true)
  const [isSidebarVisible, setSidebarVisible] = useState(true)

  const changeSidebarVisibleHook = () => {
    setSidebarVisible(false)
  }

  const animationCompleteHook = () => {
    if (!isSidebarVisible) {
      setSidebarOpened(!isSidebarOpened)
    }
    setSidebarVisible(true)
  }

  // TODO some styles to theme
  const items = [
    { title: 'Users', href: '/users' },
    { title: 'Organizations', href: '/organizations', icon: <OrganizationsIcon /> },
  ]

  // TODO devider to component

  return (
    <SidebarStateContext.Provider value={isSidebarOpened}>
      <MotionSidebarWrapper
        isSidebarOpened={isSidebarOpened}
        onAnimationComplete={animationCompleteHook}
        animate={isSidebarVisible ? 'visible' : 'invisible'}
        variants={motionVariants}
      >
        <AtlantisLogo />
        <Column gap={theme.spaces.miniIncreased}>
          {items.map((item) => (
            <SidebarItem {...item} active={pathname === item.href} />
          ))}
        </Column>
        <Pin visibleHook={changeSidebarVisibleHook} />
        <Box padding='0 20px'>
          <Divider height={1} />
        </Box>
        <Viewer name={name} email={email} avatarSrc={avatarSrc} />
      </MotionSidebarWrapper>
    </SidebarStateContext.Provider>
  )
}

import styled                          from '@emotion/styled'
import { useTheme }                    from '@emotion/react'

import Link                            from 'next/link'
import React                           from 'react'
import { FC }                          from 'react'
import { useContext }                  from 'react'
import { useHover }                    from 'react-laag'

import { Condition }                   from '@ui/condition'
import { DashboardIcon }               from '@ui/icons'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { ThemeType }                   from '@ui/theme'

import { SidebarStateContext }         from '../sidebar.context.js'
import { SidebarItemProps }            from './item.interfaces.js'
import { baseSidebarItemStyles }       from './item.styles.js'
import { shapeSidebarItemStyles }      from './item.styles.js'
import { appearanceSidebarItemStyles } from './item.styles.js'

const SidebarItemWrapper = styled(Link)(
  baseSidebarItemStyles,
  shapeSidebarItemStyles,
  appearanceSidebarItemStyles
)

export const SidebarItem: FC<SidebarItemProps> = ({ title, href, active, icon }) => {
  const theme = useTheme() as ThemeType
  const [hover, hoverProps] = useHover()

  const isSidebarOpened = useContext(SidebarStateContext)

  return (
    <SidebarItemWrapper
      isSidebarOpened={isSidebarOpened}
      href={href}
      active={active}
      hover={hover}
      {...hoverProps}
    >
      <Row
        gap={theme.spaces.miniTiny}
        alignItems='center'
        justifyContent={isSidebarOpened ? 'flex-start' : 'center'}
      >
        {icon || (
          <DashboardIcon width={theme.spaces.semiRegular} height={theme.spaces.semiRegular} />
        )}
        <Condition match={isSidebarOpened}>
          <Text fontSize='normal.semiDefault'>{title}</Text>
        </Condition>
      </Row>
    </SidebarItemWrapper>
  )
}

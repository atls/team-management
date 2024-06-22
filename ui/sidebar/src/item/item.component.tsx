import styled                          from '@emotion/styled'

import Link                            from 'next/link'
import React                           from 'react'
import { FC }                          from 'react'

import { Row }                         from '@ui/layout'

import { baseSidebarItemStyles }       from './item.styles.js'
import { shapeSidebarItemStyles }      from './item.styles.js'
import { appearanceSidebarItemStyles } from './item.styles.js'

const SidebarItemWrapper = styled(Link)(
  baseSidebarItemStyles,
  shapeSidebarItemStyles,
  appearanceSidebarItemStyles
)

// TODO interface
export const SidebarItem: FC<any> = ({ title, href }) => {
  return (
    <SidebarItemWrapper href={href}>
      <Row>{title}</Row>
    </SidebarItemWrapper>
  )
}

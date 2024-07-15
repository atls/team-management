import { styleFn } from 'styled-system'
import { ifProp }  from 'styled-tools'

export const baseSidebarItemStyles: styleFn = ({ theme }) => ({
  textDecoration: 'none',
})

const openedShapeStyles: styleFn = ({ theme }) => ({
  padding: theme.spaces.miniIncreased,
  paddingLeft: theme.spaces.increased,
})

const closedShapeStyles: styleFn = ({ theme }) => ({
  padding: theme.spaces.miniIncreased,
  justifyContent: 'center',
})

export const shapeSidebarItemStyles = ifProp(
  'isSidebarOpened',
  openedShapeStyles,
  closedShapeStyles
)

const baseAppearanceStyles: styleFn = ({ theme }) => ({
  borderRightStyle: 'solid',
  borderRightColor: 'transparent',
  borderRightWidth: theme.spaces.semiTiny,
  borderLeftStyle: 'solid',
  borderLeftColor: theme.colors.sidebar.background,
  borderLeftWidth: theme.spaces.semiTiny,
})

const defaultAppearanceStyles: styleFn = ({ theme }) => ({
  ...baseAppearanceStyles({ theme }),
  borderLeftColor: theme.colors.sidebar.background,
})

const hoverAppearanceStyles: styleFn = ({ theme }) => ({
  ...baseAppearanceStyles({ theme }),
  borderLeftColor: theme.colors.sidebar.sidebarItem.borderActive,
})

const activeAppearanceStyles: styleFn = ({ theme }) => ({
  ...baseAppearanceStyles({ theme }),
  backgroundColor: theme.colors.sidebar.sidebarItem.backgroundSelected,
  borderLeftColor: theme.colors.sidebar.sidebarItem.borderActive,
})

export const appearanceSidebarItemStyles = ifProp(
  'active',
  activeAppearanceStyles,
  ifProp('hover', hoverAppearanceStyles, defaultAppearanceStyles)
)

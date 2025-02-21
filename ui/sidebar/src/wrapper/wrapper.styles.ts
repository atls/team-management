import type { styleFn } from 'styled-system'

import { ifProp }       from 'styled-tools'

export const baseSidebarStyles: styleFn = ({ theme }) => ({
  position: 'sticky',
  top: theme.spaces.zero,
  zIndex: theme.spaces.s1400,
})

const baseShapeStyles: styleFn = ({ theme }) => ({
  height: theme.spaces.fullVh,
  padding: '30px 0 30px',
  gap: theme.spaces.moderate,
})

const closedShapeStyles: styleFn = ({ theme }) => ({
  ...baseShapeStyles({ theme }),
  width: theme.spaces.huge,
})

const openedShapeStyles: styleFn = ({ theme }) => ({
  ...baseShapeStyles({ theme }),
  width: theme.spaces.largeSemiDecreased,
})

export const shapeSidebarStyles = ifProp('isSidebarOpened', openedShapeStyles, closedShapeStyles)

export const appearanceSidebarStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.sidebar.background,
})

import type { CSSObject } from '@emotion/react'
import type { styleFn }   from 'styled-system'

import { ifProp }         from 'styled-tools'

const baseShapeStyles: styleFn = ({ theme }) => ({
  gap: theme.spaces.semiMedium,
  padding: theme.spaces.v0h20,
  justifyContent: 'space-between',
  alignItems: 'center',
})

const openedShapeStyles: styleFn = ({ theme }): CSSObject => ({
  ...baseShapeStyles({ theme }),
  width: theme.spaces.largeSemiDecreased,
})

const closedShapeStyles: styleFn = ({ theme }): CSSObject => ({
  ...baseShapeStyles({ theme }),
  width: 'min-content',
})

export const shapeStyles = ifProp('isSidebarOpened', openedShapeStyles, closedShapeStyles)

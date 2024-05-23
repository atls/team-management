import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

import { theme }     from '@ui/theme'

export const baseItemStyles: CSSObject = {
  width: theme.space.full,
  height: theme.space.mediumSemiDefault,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.space.miniReduced,
  textDecoration: 'none',
  boxSizing: 'border-box',
  color: theme.colors.black,
  padding: theme.space.tb4lr40,
}

export const activeItemStyles: CSSObject = {
  borderLeft: '3px solid #387ADD',
  backgroundColor: theme.backgrounds.ghostWhite,
}

export const ifActiveItemModifier = (styles?: CSSObject | styleFn) =>
  ifProp('active', [activeItemStyles, styles])
